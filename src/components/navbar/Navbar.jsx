import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <h1 className="navbar__title"><Link to="/">Senior Upskilling Blog</Link></h1>
        <ul className="navbar__menu">
          <li><Link to="/software-engineering">Software Engineering</Link></li>
          <li><Link to="/dev-ops">Dev-Ops</Link></li>
          <li><Link to="/soft-skills">Soft Skills</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};
