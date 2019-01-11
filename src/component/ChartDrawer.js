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

var labels = {
  labels: ["x", "y", "z"]
};

function chartChooser(type) {
  if (type === "pies") {
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
  } else if (type === "bars") {
    return (
      <Transform method={["transpose", "stack"]}>
        <Bars
          combined={true}
          padAngle={0.025}
          cornerRadius={5}
          innerPadding={2}
        />
      </Transform>
    );
  } else if (type === "cloud") {
    return <Cloud />;
  } else if (type === "dots") {
    return <Dots />;
  } else if (type === "radial") {
    return <RadialLines />;
  } else if (type === "lines") {
    return <Lines />;
  } else {
    return <Bars />;
  }
}

class ChartDrawer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  }

  render() {
    return (
      <div>
        <Chart
          width={600}
          height={250}
          series={this.props.series}
          minY={0}
          maxY={20}
        >
          {chartChooser(this.props.type)}
        </Chart>
      </div>
    );
  }
}

export default ChartDrawer;
