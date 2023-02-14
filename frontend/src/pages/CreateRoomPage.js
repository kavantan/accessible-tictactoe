import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CreateRoomPage.css";

const CreateRoom = ({ socket }) => {
  const { user } = useSelector((state) => state.user);

  const [copyBtnValue, setCopyBtnValue] = useState("Copy");
  const [copied, setCopied] = useState(false);

  const roomId = nanoid(7);

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  });

  useEffect(() => {
    socket.emit("joinRoom", {
      username: user.userName,
      userId: user.userId,
      roomId,
    });
  }, [socket, roomId, user.userId, user.userName]);

  useEffect(() => {
    socket.on("message", (payload) => {
      console.log(payload);
    });

    socket.on("message", (message) => {
      console.log(message);
    });
  });

  function copyText() {
    navigator.clipboard.writeText(roomId);

    setCopyBtnValue("Copied");
    setCopied(true);

    setInterval(() => {
      setCopyBtnValue("Copy");
      setCopied(false);
    }, 3000);
  }

  return (
    <div>
      <h1>Create Room</h1>
      <div className="create-room-container">
        <div className="url-container">
          <input
            value={roomId}
            className="name-input url-input"
            type="text"
            disabled={true}
          />
          <button
            className={
              copied ? `room-btn copy-btn copied` : `room-btn copy-btn`
            }
            onClick={copyText}
          >
            {copyBtnValue}
          </button>
        </div>
        <div className="go-to-game">
          <Link to={`/game/${roomId}`}>
            {" "}
            <button className="room-btn">Play Game</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
