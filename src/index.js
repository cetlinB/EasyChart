import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { VisibilityFilters } from "./actions/actions";
import MainPage from "./component/MainPage";
import { createStore } from "redux";
import { chartApp } from "./states/initial";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
