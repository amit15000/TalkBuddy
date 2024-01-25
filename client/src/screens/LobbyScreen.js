import React, { useCallback, useState } from "react";

function LobbyScreen() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(email, room);
  });
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
