import React from "react";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr key={this.props.index}>
        <th>{this.props.index + 1}</th>
        {this.props.series.map((c, idx) => {
          return (
            <td>
              <div contentEditable="true">{c.data[this.props.index]}</div>
            </td>
          );
        })}
      </tr>
    );
  }
}

class DataSetTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["x", "y"]
    };
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
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
              <th>#</th>
              {this.state.labels.map((c, index) => {
                return (
                  <th>
                    <div
                      contentEditable="true"
                      id={index}
                      onChange={this.handleChange}
                    >
                      {c}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.series[0].data.map((x, idx) => {
              return <TableRow index={idx} series={this.props.series} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataSetTable;
