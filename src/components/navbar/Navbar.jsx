import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h1 className="navbar__title">
          <Link to="/">Senior Upskilling Journal</Link>
        </h1>
        <ul className="navbar__menu">
          <li>
            <Link to="/hardskills">Hard Skills</Link>
          </li>
          <li>
            <Link to="/softskills">Soft Skills</Link>
          </li>
        </ul>
        <div className="navbar__quote">
          <hr />
          <p>
          The greatest contribution of a leader is to make other leaders
          </p>
          <p className="navbar__quote-author">- Simon Sinek</p>
          <hr />
        </div>
      </div>
    </nav>
  );
};
