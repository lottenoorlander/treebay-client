import api from "../../api";
import { errorHandling } from "../error/actions";

export function signUp(username, password, history) {
  return (dispatch, getState) => {
    api("/user", {
      method: "POST",
      body: {
        username: username,
        password: password
      }
    })
      .then(response => history.push(`/login`))
      .catch(error => dispatch(errorHandling(error)));
  };
}
