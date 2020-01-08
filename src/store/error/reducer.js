const initialState = null;

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case "ERROR":
      return action.payload.api_error;
    case "CLEAR_ERROR":
      return initialState;
    default:
      return state;
  }
}
