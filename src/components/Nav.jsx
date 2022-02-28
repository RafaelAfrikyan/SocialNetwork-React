import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <a>
          <li>Profile</li>
        </a>
        <a>
          <li>Messages</li>
        </a>
        <a>
          {" "}
          <li>News</li>
        </a>
        <a>
          {" "}
          <li>Music</li>
        </a>
        <a>
          <li>Setting</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
