import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: {}
    };
  }

  onCircuitSelected = c => {
    c.ccircuit = bootstrapCircuit(c);
    this.setState({
      appState: {
        editingCircuit: c
      }
    });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="navbar" id="navbarNav">
                <ul className="nav navbar-nav-right">
                  <li className="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Wykres
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="/">
                        Utwórz nowy
                      </a>
                      <a class="dropdown-item" href="/save">
                        Zapisz
                      </a>
                      <a class="dropdown-item" href="/open">
                        Otwórz
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Edycja
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Widok
                    </a>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <a
                      class="nav-link"
                      href="https://2pkjnj1970.codesandbox.io/"
                    >
                      Pomoc<span class="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <Route exact path="/" component={Start} />
            <Route path="/chart" render={e => <p>nic</p>} />
            <Route
              path="/nic"
              render={e => {
                <p>też nic</p>;
              }}
            />
          </div>
        </Router>
      </div>
    );
  }
}

function New() {
  return <div className="App" />;
}

class Menu extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Route exact path="/" component={<div />} />
        <Route
          path="/start"
          render={props => (
            <CircuitsList onCircuitSelected={this.onCircuitSelected} />
          )}
        />
        <Route
          path="/chart"
          render={props => {
            return <CircuitEditor appState={this.state.appState} />;
          }}
        />
        <canvas className="view" />
        <div className="button_list">
          <a href="www.isod.ee.pw.edu.pl">
            <img
              src="https://uploads.codesandbox.io/uploads/user/bfa33310-b706-404e-ac3d-b090a60a21b3/3UD0-right.bmp"
              className="steerButton"
              value="Isod"
              alt="Right"
            />
          </a>
        </div>
      </div>
    );
  }
}

class Start extends React.Component {
  render() {
    return (
      <div>
        <img src="https://o.art-madam.pl/zdjecie/teczowe-ptaki-nowoczesny-obraz-recznie,kpftrlcpfbnwssfd.jpg" />
      </div>
    );
  }
}

function App() {
  return <MainPage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
