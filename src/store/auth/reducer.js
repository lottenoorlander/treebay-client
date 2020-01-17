const jwt = sessionStorage.getItem("jwt");
const user = sessionStorage.getItem("user");
const isSeller = JSON.parse(sessionStorage.getItem("isSeller"));
const id = sessionStorage.getItem("id");
// const stripeCode = JSON.parse(sessionStorage.getItem("stripeCode"));

const initialState = {
  jwt: jwt ? jwt : null,
  user: user ? user : null,
  isSeller: isSeller ? JSON.parse(isSeller) : null,
  id: id ? id : null
  // stripeCode: stripeCode ? stripeCode : null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      sessionStorage.setItem("jwt", action.payload.jwt);
      sessionStorage.setItem("user", action.payload.user);
      sessionStorage.setItem(
        "isSeller",
        JSON.stringify(action.payload.isSeller)
      );
      sessionStorage.setItem("id", action.payload.id);
      // sessionStorage.setItem(
      //   "stripeCode",
      //   JSON.stringify(action.payload.stripeCode)
      // );
      return action.payload;
    }
    case "USER_LOGGED_OUT": {
      sessionStorage.clear();
      return {
        jwt: null,
        user: null,
        isSeller: null,
        id: null,
        stripeCode: null
      };
    }
    case "USER_REQUESTED_LINK": {
      return { ...state, stripeLink: action.payload };
    }
    case "UPDATE_ACCOUNT_INFO": {
      return {
        ...state,
        user: action.payload.user,
        isSeller: action.payload.isSeller,
        id: action.payload.id,
        stripeCode: action.payload.stripeCode,
        trees: action.payload.trees
      };
    }
    default: {
      return state;
    }
  }
}
