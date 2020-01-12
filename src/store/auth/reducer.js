const initialState = {
  jwt: null,
  user: null,
  isSeller: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return action.payload;
    }
    case "USER_LOGGED_OUT": {
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
