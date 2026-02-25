import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="logo-div">
          <img
            className="main-logo"
            src="./images/Logo.jpg"
            alt="Start up logo"
          />
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
//try push