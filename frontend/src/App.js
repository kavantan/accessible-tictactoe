import CreateRoomPage from "./pages/CreateRoomPage";
import GamePage from "./pages/GamePage";
import JoinRoomPage from "./pages/JoinRoomPage";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/createroom" element={<CreateRoomPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/joinroom" element={<JoinRoomPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
