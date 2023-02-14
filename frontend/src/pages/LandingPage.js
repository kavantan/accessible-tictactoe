import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utilities/addUser";
import { nanoid } from "nanoid";
import "./LandingPage.css";

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
    <div className="home">
      <h1>Accessible Tic Tac Toe</h1>
      {error.length > 0 ? <p className="error">{error}</p> : null}

      {!show ? (
        <>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="name-input"
            type="text"
            placeholder="Enter your name"
          />
          <button className="room-btn" onClick={handleClick}>
            Let's Go
          </button>
        </>
      ) : null}

      {show && (
        <div className="show">
          <div className="room-btns">
            <Link to="/createroom">
              <button className="room-btn">Create a Room</button>
            </Link>
            <Link to="/joinroom">
              <button className="room-btn">Join a Room</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
