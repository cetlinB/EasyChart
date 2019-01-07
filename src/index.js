import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <canvas className="view" />
      <div className="button_list">
        <img
          src="right.jpg"
          className="steerButton"
          value="Isod"
          alt="Left"
          onload="isod.ee.pw.edu.pl"
        />
      </div>
    </div>
  );
}
//COS

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
