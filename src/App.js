import React from "react";
import NavBar from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div className="content">
        <Form />
      </div>
    </div>
  );
}
