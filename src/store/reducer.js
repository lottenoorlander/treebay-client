import { combineReducers } from "redux";
import errorReducer from "./error/reducer";

export default combineReducers({
  error: errorReducer
});
