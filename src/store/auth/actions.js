import api from "../../api";
import { errorHandling } from "../error/actions";

export function signUp(accountDetails, buyerOrSeller, history) {
  return (dispatch, getState) => {
    api(`/${buyerOrSeller}`, {
      method: "POST",
      body: accountDetails
    })
      .then(response => history.push(`/login`))
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
        return dispatch(userLoggedIn(user.jwt, user.user));
      })
      .then(response =>
        loginDetails.isSeller
          ? history.push(`/seller/account`)
          : history.push(`/trees`)
      )
      .catch(error => dispatch(errorHandling(error)));
  };
}

export function userLoggedIn(jwt, user) {
  return {
    type: "USER_LOGGED_IN",
    payload: { jwt, user }
  };
}
