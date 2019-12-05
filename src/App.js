import React from "react";
import NavBar from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <div className="colorMode">
          <i className="icon icon-moon">
            {" "}
            <span>Color Mode</span>
          </i>
        </div>
      </header>
      <div className="content">
        <Form />
      </div>
    </div>
  );
}
