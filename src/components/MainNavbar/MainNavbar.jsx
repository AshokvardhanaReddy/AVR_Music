import "./MainNavbar.css";

import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

import logo from "../../assests/AVR Music Logo.png";
import profile_pic from "../../assests/user_profile_pic.png";

const MainNavbar = () => {
  const { token } = useContext(StoreContext);

  return (
    <section className = "main-navbar-container" >
      <div className="main-navbar">
        <img className="company-logo" src={logo} alt="AVR Music Company Logo" />

        {!token ? (
          <p className="main-navbar-login">Login</p>
        ) : (
          <div className="main-navbar-profile">
            <img src={profile_pic} alt="User Profile Picture" />
            <p>User Name</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainNavbar;
