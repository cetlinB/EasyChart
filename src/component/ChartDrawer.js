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
  if ((type = "pies")) {
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
  } else if ((type = "bars")) {
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

export default ChartDrawer;
