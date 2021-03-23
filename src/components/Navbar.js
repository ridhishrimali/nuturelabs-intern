import React from "react";
import "../css/Navbar.css";
import Avatar from "../Images/avatar3.jpg";

function Navbar() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__logo__container">
          <span className="logo__icon"></span>
          <h4>Logo</h4>
        </div>
        <div className="navbar__menu__bar">
          <div className="navbar__menu__bar__itemone">
            <p>Dashboard</p>
          </div>
          <div className="navbar__menu__bar__itemtwo">
            <p>Find Experts</p>
          </div>
          <div className="navbar__menu__bar__itemthree">
            <p>Discussion</p>
          </div>
        </div>
        <div className="navbar__profile__container">
          <div className="navbar__profile__container__bell">
            <i className="fa fa-bell-o" aria-hidden="true"></i>
          </div>
          <div className="navbar__profile__container_chat">
            <i className="fa fa-comments-o" aria-hidden="true"></i>
          </div>
          <div className="navbar__profile__container__avatar">
            <img src={Avatar} alt="avatar" />
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <hr className="navbar_hr" />
    </React.Fragment>
  );
}

export default Navbar;
