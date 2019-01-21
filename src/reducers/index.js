import { combineReducers } from "redux";
import undoable from "redux-undo";
import { dataSets } from "./DataSetReducer";
import { dataSheet } from "./PageConfigReducer";
import { chart } from "./ChartReducer";

const undoConfig = { limit: 5 };

export default combineReducers({
  dataSets: undoable(dataSets, undoConfig),
  dataSheet: undoable(dataSheet, undoConfig),
  chart: undoable(chart, undoConfig)
});
