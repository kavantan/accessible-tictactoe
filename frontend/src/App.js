import CreateRoomPage from "./pages/CreateRoomPage";
import GamePage from "./pages/GamePage";
import JoinRoomPage from "./pages/JoinRoomPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/createroom"
            element={<CreateRoomPage socket={socket} />}
          />
          <Route path="/game/:roomId" element={<GamePage socket={socket} />} />
          <Route path="/joinroom" element={<JoinRoomPage socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
