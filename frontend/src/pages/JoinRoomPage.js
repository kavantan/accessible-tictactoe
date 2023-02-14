import { useState, useEffect } from "react";

const JoinRoomPage = ({ socket }) => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <div>
      <h1>Join A Room</h1>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button>Join Room</button>
      </form>
    </div>
  );
};

export default JoinRoomPage;
