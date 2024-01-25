import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

function LobbyScreen() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  console.log(socket);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });

      console.log(email, room);
    },
    [email, room, socket]
  );
  useEffect(() => {});
  return (
    <div>
      <div>Lobby</div>
      <form onSubmit={handleSubmitForm}>
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
        <button>Join</button>
      </form>
    </div>
  );
}

export default LobbyScreen;
