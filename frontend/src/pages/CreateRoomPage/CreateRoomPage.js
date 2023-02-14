import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CreateRoomPage.module.css";

const roomId = nanoid(7);

const CreateRoomPage = ({ socket }) => {
  const { user } = useSelector((state) => state.user);

  const [copyBtnValue, setCopyBtnValue] = useState("Copy");
  const [copied, setCopied] = useState(false);

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
  }, [socket, user.userId, user.userName]);

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
      <h1 className={styles["create-room-header"]}>Create Room</h1>
      <div className={styles["create-room-container"]}>
        <div className={styles["url-container"]}>
          <label htmlFor="room-id" className={styles["url-label"]}>
            Room ID:
          </label>
          <input
            id="room-id"
            value={roomId}
            className={`${styles["name-input"]} ${styles["url-input"]}`}
            type="text"
            disabled={true}
            aria-label="Room ID"
          />
          <button
            className={
              copied
                ? `${styles["copy-btn"]} ${styles["copied"]}`
                : styles["copy-btn"]
            }
            onClick={copyText}
            title="Copy Room ID"
            tabIndex="0"
            role="button"
            aria-label="Copy Room ID"
          >
            {copyBtnValue}
          </button>
        </div>
        <div className={styles["go-to-game"]}>
          <Link to={`/game/${roomId}`}>
            <button className={styles["room-btn"]} aria-label="Play Game">
              Play Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomPage;
