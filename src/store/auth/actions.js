import api from "../../api";
import { errorHandling } from "../error/actions";

export function signUp(username, password) {
  return (dispatch, getState) => {
    api("/user", {
      method: "POST",
      body: {
        username: username,
        password: password
      }
    })
      .then(response => response) //REDIRECT TO SIGNUP)
      .catch(error => dispatch(errorHandling(error)));
  };
}
