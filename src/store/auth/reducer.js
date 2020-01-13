const jwt = sessionStorage.getItem("jwt");
const user = sessionStorage.getItem("user");
const isSeller = sessionStorage.getItem("isSeller");

const initialState = {
  jwt: jwt ? jwt : null,
  user: user ? user : null,
  isSeller: isSeller ? isSeller : null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      sessionStorage.setItem("jwt", action.payload.jwt);
      sessionStorage.setItem("user", action.payload.user);
      sessionStorage.setItem("isSeller", action.payload.isSeller);
      return action.payload;
    }
    case "USER_LOGGED_OUT": {
      sessionStorage.clear();
      return initialState;
    }
    case "USER_REQUESTED_LINK": {
      return { ...state, stripeLink: action.payload };
    }
    default: {
      return state;
    }
  }
}
