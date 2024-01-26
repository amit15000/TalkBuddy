class PeerService {
  constructor() {
    if (!this.peer) {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilo.com:3478",
            ],
          },
        ],
      });
    }
  }

  async getAnswer(offer) {
    if (this.peer) {
      await this.peer.setRemoteDescription(offer);
      const ans = await this.peer.createAnswer();
      await this.peer.setLocalDescription(new RTCSessionDescription(ans));
      return ans;
    }
  }

  async getOffer() {
    if (this.peer) {
      const offer = await this.peer.createOffer();
      await this.peer.setLocalDescription(new RTCSessionDescription(offer));
      return offer;
    }
  }
  async setLocalDescription(ans) {
    if (this.peer && ans !== null && typeof ans === "object" && ans.type) {
      const validTypes = ["offer", "answer", "pranswer"];

      if (validTypes.includes(ans.type)) {
        try {
          await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
        } catch (error) {
          console.error("Error setting remote description:", error);
        }
      } else {
        console.error("Invalid value for ans.type:", ans.type);
      }
    } else {
      console.error("Invalid value for ans:", ans);
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PeerService();
