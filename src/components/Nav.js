import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="logo">firegram</h1>
      <ul className="nav__list">
        <li className="nav__item nav__item--login">login</li>
        <li className="nav__item nav__item--contact">contact</li>
        <li className="nav__item nav__item--about">about</li>
      </ul>
    </nav>
  );
};

export default Nav;
