import { useState, useEffect } from "react";

const CreateRoomPage = () => {
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");

  return (
    <div>
      <h1>Create Room</h1>
      <div>
        <label>Enter your name:</label>
        <textarea
          placeholder="Your Name"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </div>
      <div>
        <label>Enter custom room name:</label>
        <textarea
          placeholder="Custom Room Name"
          onChange={(event) => {
            setRoomName(event.target.value);
          }}
        />
      </div>
      <button>Create Room</button>
    </div>
  );
};

export default CreateRoomPage;
