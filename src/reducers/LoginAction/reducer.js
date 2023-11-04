import { SHOW_LOGIN, HIDE_LOGIN } from './actions';

const initialState = {
  showLogin: false,
  activeForm: 'loginForm', // 기본값으로 'loginForm'을 설정
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...state,
        showLogin: true,
        activeForm: action.payload || 'loginForm' // payload가 제공되면 그 값을 사용하고, 없으면 'loginForm'을 기본값으로 설정
      };
    case HIDE_LOGIN:
      return {
        ...state,
        showLogin: false,
        activeForm: 'loginForm' // 로그인 창을 숨길 때는 기본 폼으로 리셋
      };
    default:
      return state;
  }
};

export default loginReducer;
