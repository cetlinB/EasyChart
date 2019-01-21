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

import {
  SET_NEW_DATA_BY_DATA_SET_INDEX,
  SET_LABEL_BY_INDEX,
  SET_PURE_DATA,
  SET_CHART_TITLE,
  SET_COLOR_BY_INDEX,
  ADD_NEW_EMPTY_DATA_SET,
  ADD_NEW_EMPTY_DATA_TO_EVERY_SET,
  SET_CHART_TYPE,
  SET_DATA_LABEL
} from "../constants/ChartActions";

export const setPureData = dataList => ({
  type: SET_PURE_DATA,
  dataList
});

export const setLabelByIndex = (newLabel, dataSetIndex) => ({
  type: SET_LABEL_BY_INDEX,
  newLabel,
  dataSetIndex
});

export const setNewDataByDataSetIndex = (newData, dataSetIndex, dataIndex) => ({
  type: SET_NEW_DATA_BY_DATA_SET_INDEX,
  newData,
  dataSetIndex,
  dataIndex
});

export const setChartTitle = newTitle => ({
  type: SET_CHART_TITLE,
  newTitle
});

export const setColorByIndex = (newColor, dataSetIndex) => ({
  type: SET_COLOR_BY_INDEX,
  newColor,
  dataSetIndex
});

export const addNewEmptyDataSet = () => ({
  type: ADD_NEW_EMPTY_DATA_SET
});

export const addNewEmptyDataToEverySet = () => ({
  type: ADD_NEW_EMPTY_DATA_TO_EVERY_SET
});

export const setChartType = newChartType => ({
  type: SET_CHART_TYPE,
  newChartType
});

export const setDataLabel = (newLabel, dataSetIndex, dataIndex) => ({
  type: SET_DATA_LABEL,
  newLabel,
  dataSetIndex,
  dataIndex
});
