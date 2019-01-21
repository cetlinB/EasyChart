import { deepCopyObject } from "../utilities/utilities";
import { SET_CHART_TITLE, SET_CHART_TYPE } from "../constants/ChartActions";
import { SCATTER_CHART } from "../constants/ChartTypes";

const initialState = {
  title: "MY CHART",
  type: SCATTER_CHART
};

export const chart = (state = initialState, action) => {
  let newState = deepCopyObject(state);
  switch (action.type) {
    case SET_CHART_TITLE:
      newState.title = action.newTitle;
      return newState;
    case SET_CHART_TYPE:
      newState.type = action.newChartType;
      return newState;
    default:
      return newState;
  }
};
