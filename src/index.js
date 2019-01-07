import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <canvas className="view" />
      <div className="button_list">
        <img src="right.jpg" className="steerButton" value="Isod" alt="Left" />
      </div>
    </div>
  );
}

function New() {
  return <div className="App" />;
}

const Navigation = () => (
  <div>
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/start">Repos</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={} />
        <Route
          path="/circuits"
          render={props => (
            <CircuitsList onCircuitSelected={this.onCircuitSelected} />
          )}
        />
        <Route
          path="/editor"
          render={props => {
            return <CircuitEditor appState={this.state.appState} />;
          }}
        />
      </div>
    </Router>
  </div>
    

);

// const Root = () => (
//     <Router>
//       <Route path="/" component={App} />
//       <Route path="/start" component={New} />
//     </Router>
// );
export default Navigation;

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
