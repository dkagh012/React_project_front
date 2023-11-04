import { SHOW_LOGIN, HIDE_LOGIN } from './actions';

const initialState = {
  showLogin: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return { ...state, showLogin: true };
    case HIDE_LOGIN:
      return { ...state, showLogin: false };
    default:
      return state;
  }
};

export default loginReducer;