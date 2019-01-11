import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { VisibilityFilters } from "/src/actions/actions";
import { connect } from "react-redux";
import propTypes from "prop-types";
//import { ChartDrawer } from "./component/ChartDrawer";

import "/src/styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

import ChartDrawer from "./ChartDrawer";
import Menu from "./Menu";
import DataSetTable from "./DataSetTable";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "main",
      appState: {},
      labels: ["x", "y"],
      series: [{ data: [1, 3] }, { data: [4, 2] }]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevState.page !== this.state.page) {
      this.setState({
        page: this.state.page
      });
    }
  }

  onNewRowAdded = r => {
    if (r.target.id === "newRowButton") {
      dataSet.addRow();
    }
  };

  pageHandler = e => {
    console.log(e.target.id);
    this.setState({
      page: e.target.id
    });
  };

  render() {
    let page;
    if (this.props.visibilityFilter === VisibilityFilters.SHOW_MAIN) {
      page = (
        <DataSetTable labels={this.state.labels} series={this.state.series} />
      );
    } else if (this.props.visibilityFilter === VisibilityFilters.SHOW_CHART) {
      page = <ChartDrawer type="pies" series={this.state.series} />;
    } else {
      page = (
        <div>
          <h1>Error Page</h1>
          <p>Page not exists.</p>
        </div>
      );
    }
    return (
      <div>
        <Router>
          <div>
            <Menu onChange={this.pageHandler} />
            <div>{page}</div>
          </div>
        </Router>
      </div>
    );
  }
}

MainPage.propTypes = {
  visibilityFilter: propTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

export default connect(mapStateToProps)(MainPage);
