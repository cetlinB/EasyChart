import { VisibilityFilters, SET_VISIBILITY_FILTER } from "/src/actions/actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_MAIN,
  pages: []
};

export function chartApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}
