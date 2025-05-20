import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <a href="/mission">Mission</a>
        </li>
        <li>
          <a href="/dashboard">Compose ton menu !</a>
        </li>
        <li>
          <a href="/playboard">Let's play !</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
