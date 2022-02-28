import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <a className={classes.item}>
          <li>Profile</li>
        </a>
        <a className={classes.item}>
          <li>Messages</li>
        </a>
        <a className={classes.item}>
          
          <li>News</li>
        </a>
        <a className={classes.item}>
          
          <li>Music</li>
        </a>
        <a className={classes.item}>
          <li>Setting</li>
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
