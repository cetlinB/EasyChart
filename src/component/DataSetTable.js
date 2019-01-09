import React from "react";

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

export default DataSetTable;
