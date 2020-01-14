const initialState = { trees: [], treeDetail: null, total: null };

export default function treeReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_TREES":
      return {
        ...state,
        trees: action.payload.trees,
        total: action.payload.total
      };
    case "ONE_TREE":
      return { ...state, treeDetails: action.payload };
    case "MY_TREES":
      return {
        ...state,
        yourTrees: action.payload
      };
    default:
      return state;
  }
}
