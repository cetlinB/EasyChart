import {
  SET_NEW_DATA_BY_DATA_SET_INDEX,
  SET_LABEL_BY_INDEX,
  SET_PURE_DATA,
  SET_COLOR_BY_INDEX,
  ADD_NEW_EMPTY_DATA_SET,
  ADD_NEW_EMPTY_DATA_TO_EVERY_SET,
  SET_DATA_LABEL
} from "../constants/ChartActions";
import { DEFAULT_COLOR_LIST } from "../constants/DefaultColors";
import { deepCopyObject } from "../utilities/utilities";

const initialState = [
  {
    index: 0,
    label: "SET 0",
    color: DEFAULT_COLOR_LIST[0],
    data: [
      {
        x: "1",
        y: "2",
        valid: true
      },
      {
        x: "2",
        y: "3",
        label: "SET CUSTOM TEXT\n⬇",
        valid: true
      },
      {
        x: "4",
        y: "4",
        valid: true
      },
      {
        x: "3",
        y: "6",
        valid: true
      }
    ]
  },
  {
    index: 1,
    label: "SET 1",
    color: DEFAULT_COLOR_LIST[1],
    data: [
      {
        x: "3",
        y: "5",
        valid: true
      },
      {
        x: "4",
        y: "3",
        valid: true
      },
      {
        x: "5",
        y: "2",
        valid: true
      },
      {
        x: "",
        y: "",
        valid: true
      }
    ]
  }
];

export const dataSets = (state = initialState, action) => {
  let newState = deepCopyObject(state);
  switch (action.type) {
    case SET_LABEL_BY_INDEX:
      newState[action.dataSetIndex].label = action.newLabel;
      return newState;
    case SET_COLOR_BY_INDEX:
      newState[action.dataSetIndex].color = action.newColor;
      return newState;
    case ADD_NEW_EMPTY_DATA_SET:
      const newIndex = newState.length;
      const newData =
        newIndex === 0
          ? []
          : newState[0].data.map(() => ({
              x: "",
              y: "",
              valid: true
            }));
      newState.push({
        index: newIndex,
        label: `SET ${newIndex}`,
        color: DEFAULT_COLOR_LIST[newIndex],
        data: newData
      });
      return newState;
    case ADD_NEW_EMPTY_DATA_TO_EVERY_SET:
      const newDataPrototype = {
        x: "",
        y: "",
        valid: true
      };
      newState.forEach(set => set.data.push(deepCopyObject(newDataPrototype)));
      return newState;
    case SET_NEW_DATA_BY_DATA_SET_INDEX:
      newState[action.dataSetIndex].data[action.dataIndex] = deepCopyObject(
        action.newData
      );
      return newState;
    case SET_PURE_DATA:
      let index = 0;
      return action.dataList.map(data => ({
        index: index,
        label: `SET ${index}`,
        color: DEFAULT_COLOR_LIST[index++],
        data
      }));
    case SET_DATA_LABEL:
      newState[action.dataSetIndex].data[action.dataIndex].label =
        action.newLabel;
      return newState;
    default:
      return state;
  }
};
