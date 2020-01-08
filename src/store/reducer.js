import { combineReducers } from "redux";
import errorReducer from "./error/reducer";
import authReducer from "./auth/reducer";

export default combineReducers({
  error: errorReducer,
  auth: authReducer
});
