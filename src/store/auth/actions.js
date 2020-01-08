import api from "../../api";

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
      .catch(error => dispatch(Event(errorHandling(error))));
  };
}
