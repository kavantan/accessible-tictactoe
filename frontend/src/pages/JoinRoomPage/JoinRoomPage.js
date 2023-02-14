import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./JoinRoomPage.module.css";

const JoinRoom = ({ socket }) => {
  const { user } = useSelector((state) => state.user);

  const [joined, setJoined] = useState(false);

  const [roomId, setRoomId] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (roomId.length === 0) {
      setError("Please enter room id");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    socket.emit("joinExistingRoom", {
      username: user.userName,
      userId: user.userId,
      roomId,
    });
  };

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }

    socket.on("message", (payload) => {
      console.log(payload);
      if (payload.error) {
        setError(payload.error);
        setTimeout(() => {
          setError("");
        }, 4000);
      } else {
        setJoined(true);
      }
    });
  });

  return (
    <div className={styles["join-room"]} role="main">
      <h1 className={styles["join-room-header"]} id="join-room-heading">
        Join Game
      </h1>

      <div className={styles["join-room-container"]}>
        <div className={styles["url-container"]}>
          {error.length > 0 ? (
            <p className={styles["error"]} id="join-room-error">
              {error}
            </p>
          ) : null}

          <label htmlFor="room-id" className={styles["url-label"]}>
            Room ID:
          </label>
          <input
            id="room-id"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className={styles["name-input"]}
            type="text"
            aria-describedby="join-room-error"
            aria-invalid={error.length > 0}
          />

          <button
            disabled={joined}
            onClick={handleClick}
            className={`${styles["room-btn"]} ${styles["copy-btn"]}`}
            aria-describedby="join-room-status"
            aria-disabled={joined}
          >
            {joined ? "Joined" : "Join"}
          </button>
        </div>
        <div className={styles["go-to-game"]}>
          {joined ? (
            <Link to={`/game/${roomId}`}>
              <button className={styles["room-btn"]}>Play Game</button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
