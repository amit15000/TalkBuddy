import React, { useState } from "react";

function LobbyScreen() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>Lobby</div>
      <form>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email">Room Number</label>
        <input
          type="number"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </form>
    </div>
  );
}

export default LobbyScreen;
