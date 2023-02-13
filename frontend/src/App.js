import GamePage from "./pages/GamePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
