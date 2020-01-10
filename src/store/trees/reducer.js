const initialState = [];

export default function treeReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_TREES":
      return action.payload;
    default:
      return state;
  }
}
