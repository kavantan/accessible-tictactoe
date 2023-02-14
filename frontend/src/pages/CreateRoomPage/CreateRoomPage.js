import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CreateRoomPage.module.css";

const roomId = nanoid(7);

const CreateRoom = ({ socket }) => {
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
          <input
            value={roomId}
            className={`${styles["name-input"]} ${styles["url-input"]}`}
            type="text"
            disabled={true}
          />
          <button
            className={
              copied
                ? `${styles["room-btn"]} ${styles["copy-btn"]} ${styles["copied"]}`
                : `${styles["room-btn"]} ${styles["copy-btn"]}`
            }
            onClick={copyText}
          >
            {copyBtnValue}
          </button>
        </div>
        <div className={styles["go-to-game"]}>
          <Link to={`/game/${roomId}`}>
            <button className={`${styles["room-btn"]}`}>Play Game</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
