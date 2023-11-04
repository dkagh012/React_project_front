// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/LoginAction/authReducer';
import loginReducer from './reducers/LoginAction/reducer';
const rootReducer = {
  auth: authReducer,
  loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
