import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utilities/addUser";
import { nanoid } from "nanoid";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const userId = nanoid(5);

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (userName === "") {
      setError("Please enter your name");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }

    dispatch(addUser(userName, userId));

    setShow(true);
  };

  return (
    <main className={styles.home}>
      <h1>Accessible Tic Tac Toe</h1>
      {error.length > 0 ? <p className={styles.error}>{error}</p> : null}

      {!show ? (
        <>
          <label htmlFor="name-input">Enter your name:</label>
          <input
            id="name-input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={styles["name-input"]}
            type="text"
            placeholder="Enter your name"
            aria-label="Enter your name"
            required
          />
          <button
            className={styles["room-btn"]}
            onClick={handleClick}
            aria-label="Continue"
          >
            Continue
          </button>
        </>
      ) : null}

      {show && (
        <div className={styles.show}>
          <div className={styles["room-btns"]}>
            <Link to="/createroom">
              <button className={styles["room-btn"]} aria-label="Create a Room">
                Create a Room
              </button>
            </Link>
            <Link to="/joinroom">
              <button className={styles["room-btn"]} aria-label="Join a Room">
                Join a Room
              </button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
