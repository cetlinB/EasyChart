import React from "react";
import ReactDOM from "react-dom";
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

class ChartDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("done");
    const series = [
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
    return (
      <div style="width:100px; height:100px; background-color:lightblue">
        <Chart width={600} height={250} series={series} minY={0} maxY={20}>
          <Bars innerPadding={5} groupPadding={10} />
          <Lines />
          <Dots />
        </Chart>
      </div>
    );
  }
}
