import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { ChartDrawer } from "./component/ChartDrawer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import ChartDrawer from "./component/ChartDrawer";
import Menu from "./component/Menu";

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
            <Menu />
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
