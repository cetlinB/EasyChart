export const ADD_ROW = "ADD_ROW";
export const ADD_COLUMN = "ADD_COLUMN";
export const CHANGE_CHART_TYPE = "CHANGE_CHART_TYPE";
export const CHANGE_ROW_COLOR = "CHANGE_ROW_COLOR";
export const CHANGE_COLUMN_COLOR = "CHANGE_COLUMN_COLOR";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_MAIN: "SHOW_MAIN",
  SHOW_CHART: "SHOW_CHART",
  SHOW_DATA: "SHOW_DATA",
  SHOW_CHART_EDITOR: "SHOW_CHART_EDITOR"
};

export function addRow(rData) {
  return { type: ADD_ROW, rData };
}

export function addColumn(cName) {
  return { type: ADD_COLUMN, cName };
}

export function changeChartType(chartType) {
  return { type: CHANGE_CHART_TYPE, chartType };
}

export function changeRowColor(index) {
  return { type: CHANGE_ROW_COLOR, index };
}

export function changeColumnColor(label) {
  return { type: CHANGE_COLUMN_COLOR, label };
}

export function setVisibilityFilter(filter) {
  console.log(filter);
  return { type: SET_VISIBILITY_FILTER, filter };
}
