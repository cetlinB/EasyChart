import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { ChartDrawer } from "./component/ChartDrawer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import ChartDrawer from "./component/ChartDrawer";
import Menu from "./component/Menu";
import DataSetTable from "./component/DataSetTable";

class ChartDataSet {
  constructor() {
    this.table = [];
  }

  getTable() {
    return this.table;
  }
}

var series = [
  {
    data: [1, 2, 3]
  },
  {
    data: [3, 7, 11]
  },
  {
    data: [15, 17, 19]
  }
];

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
            <Route
              exact
              path="/"
              render={props => <DataSetTable series={series} />}
            />
            <Route
              path="/chart"
              render={props => <ChartDrawer series={series} type="lines" />}
            />
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

function App() {
  return <MainPage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(App(), rootElement);
