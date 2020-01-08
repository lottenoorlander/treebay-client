const initialState = null;

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ERROR":
      return action.payload.api_error;
    case "CLEAR_ERROR":
      return initialState;
    default:
      return state;
  }
}
