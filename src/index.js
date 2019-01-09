import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { ChartDrawer } from "./component/ChartDrawer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import {
  // main component
  Chart,
  // graphs
  Bars,
  Cloud,
  Dots,
  Labels,
  Lines,
  Pies,
  RadialLines,
  Ticks,
  Title,
  // wrappers
  Layer,
  Animate,
  Transform,
  Handlers,
  // helpers
  helpers,
  DropShadow,
  Gradient
} from "rumble-charts";

var type = "bars";

var labels = {
  labels: ["x", "y", "z"]
};

var series = [
  {
    data: [1, 2, 3]
  },
  {
    data: [5, 7, 11]
  },
  {
    data: [13, 17, 19]
  }
];

function chartChooser() {
  if ((type = "pies"))
    return (
      <Transform method={["transpose", "stackNormalized"]}>
        <Pies
          combined={true}
          innerRadius="33%"
          padAngle={0.025}
          cornerRadius={5}
          innerPadding={2}
          pieAttributes={{
            onMouseMove: e => (e.target.style.opacity = 1),
            onMouseLeave: e => (e.target.style.opacity = 0.5)
          }}
          pieStyle={{ opacity: 0.5 }}
        />
      </Transform>
    );
  else if ((type = "bars")) {
    return <Bars />;
  } else if ((type = "cloud")) {
    return <Cloud />;
  } else if ((type = "dots")) {
    return <Dots />;
  } else if ((type = "radial")) {
    return <RadialLines />;
  } else if ((type = "lines")) {
    return <Lines />;
  } else {
    return <Bars />;
  }
}

class ChartDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Chart width={600} height={250} series={series} minY={0} maxY={20}>
          {chartChooser()}
        </Chart>
      </div>
    );
  }
}

class ChartDataSet {
  constructor() {
    this.table = [];
  }

  getTable() {
    return this.table;
  }
}

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
                      className="nav-link dropdown-toggle"
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
                      <a class="dropdown-item" href="/chart">
                        Przejdź do wykresu
                      </a>
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
                      href="http://nonsensopedia.wikia.com/wiki/Gra:Gra"
                    >
                      Pomoc<span class="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <Route exact path="/" component={Start} />
            <Route path="/chart" component={ChartDrawer} />
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
        <DataSetTable />
      </div>
    );
  }
}

class DataSetTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["#", "x", "y"],
      data: [[1, 3], [4, 2]]
    };
  }

  changeElement(dataset, idx, row, data) {
    if ((dataset = "label")) {
    }
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {this.state.labels.map((c, index) => {
                return (
                  <th>
                    <div
                      contentEditable="true"
                      id={index}
                      onBlur={() => {
                        var newLabels = this.state.labels;
                        console.log(index);
                        newLabels[index] = 1;
                        this.setState({
                          labels: newLabels
                        });
                      }}
                    >
                      {c}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((c, idx) => {
              return (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  {c.map((x, index) => {
                    return (
                      <td>
                        <div contentEditable="true">{x}</div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

function App() {
  return <MainPage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
