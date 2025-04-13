import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul>
      <li>
          <a href="/playboard">Let's play !</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/mission">Ma mission</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
