import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import io from "socket.io-client";
const socket = io("http://localhost:4000");

const CreateRoomPage = () => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <div>
      <h1>Create A Room</h1>
      <form onSubmit={handleSubmit}>
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
        <button>Create Room</button>
      </form>
    </div>
  );
};

export default CreateRoomPage;
