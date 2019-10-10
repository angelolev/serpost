import React from "react";
import NavBar from "./components/Nav/Nav";
import Form from "./components/Form/Form";
import SearchResults from "./components/Search/SearchResults";
import "./styles.scss";

function App() {
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
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
