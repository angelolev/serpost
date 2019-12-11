import React, { Component } from "react";
import logo from "../../images/logo.svg";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        {/* <div className="nav__icon">
          <i className="icon icon-menu"></i>
        </div> */}
        <div className="nav__logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav__title">
          <p>Trackpe</p>
        </div>
      </nav>
    );
  }
}

export default Nav;
