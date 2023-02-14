import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div>
        <NavLink to="/createroom">
          <button>Create A Room</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/joinroom">
          <button>Join A Room</button>
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
