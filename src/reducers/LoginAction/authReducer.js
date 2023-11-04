// src/reducers/authReducer.js
const initialState = {
  isLoggedIn: false,
  user: null,
  users: [ // 사용자 데이터 배열
    { username: "1", password: "1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
  ],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
