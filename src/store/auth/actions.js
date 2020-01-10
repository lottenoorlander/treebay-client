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

export function login(username, password, history) {
  return (dispatch, getState) => {
    api("/login", {
      method: "POST",
      body: {
        username: username,
        password: password,
        isSeller: true
      }
    })
      .then(user => {
        return dispatch(userLoggedIn(user.jwt, user.user));
      })
      .then(response => history.push(`/trees`))
      .catch(error => dispatch(errorHandling(error)));
  };
}

export function userLoggedIn(jwt, user) {
  return {
    type: "USER_LOGGED_IN",
    payload: { jwt, user }
  };
}
