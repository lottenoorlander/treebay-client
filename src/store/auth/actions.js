import api from "../../api";
import { errorHandling } from "../error/actions";

export function signUp(accountDetails, buyerOrSeller, history) {
  return (dispatch, getState) => {
    api(`/${buyerOrSeller}`, {
      method: "POST",
      body: accountDetails
    })
      .then(response => {
        const loginDetails = {
          username: accountDetails.username,
          password: accountDetails.password,
          isSeller: true
        };
        return dispatch(login(loginDetails, history));
      })
      .then(response => history.push(`/seller/acount`))
      .catch(error => dispatch(errorHandling(error)));
  };
}

export function login(loginDetails, history) {
  return (dispatch, getState) => {
    api("/login", {
      method: "POST",
      body: loginDetails
    })
      .then(user => {
        return dispatch(userLoggedIn(user));
      })
      .then(response =>
        loginDetails.isSeller
          ? history.push(`/seller/account`)
          : history.push(`/trees`)
      )
      .catch(error => dispatch(errorHandling(error)));
  };
}

export function userLoggedIn(userDetails) {
  return {
    type: "USER_LOGGED_IN",
    payload: userDetails
  };
}
