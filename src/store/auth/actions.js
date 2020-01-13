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

export function logOut() {
  return (dispatch, getState) => {
    const logOut = { type: "USER_LOGGED_OUT" };
    return dispatch(logOut);
  };
}

export function getStripeDashUrl() {
  return (dispatch, getState) => {
    const jwt = getState().auth.jwt;
    fetch("http://localhost:4000/seller/stripedashboard", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        dispatch({ type: "USER_REQUESTED_LINK", payload: data.url });
      })
      .catch(error => {
        console.log(error);
        dispatch(errorHandling(error));
      });
  };
}

export function getAccountInfo() {
  return (dispatch, getState) => {
    const jwt = getState().auth.jwt;
    api("/seller", {
      method: "GET",
      jwt: jwt
    })
      .then(accountInfo => {
        return dispatch(updateAccountInfo(accountInfo));
      })
      .catch(error => dispatch(errorHandling(error)));
  };
}

export function updateAccountInfo(data) {
  return {
    type: "UPDATE_ACCOUNT_INFO",
    payload: data
  };
}
