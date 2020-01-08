const initialState = {
  jwt: null,
  user: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return action.payload;
    }
    case "LOGOUT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
