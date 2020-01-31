import React, { Component, useState } from "react";
import logo from "../../images/logo.svg";
import moon from "../../images/moon.svg";
import sun from "../../images/sun.svg";

export default function Nav(pros) {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  var theme = "Light";
  var themeIcon = sun;
  var contentBox = document.getElementsByTagName("body")[0];

  if (isToggled) {
    theme = "Dark";
    themeIcon = moon;
    contentBox.setAttribute("class", "dark");
  } else {
    contentBox.removeAttribute("class", "dark");
  }

  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="nav__logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav__title">
          <p>Trackpe</p>
        </div>
      </div>
      <div className="nav__right">
        <div className="nav__color-mode" onClick={toggleTrueFalse}>
          {}
          <img src={themeIcon} alt="" />
          <p>Modo {theme}</p>
        </div>
      </div>
    </nav>
  );
}
