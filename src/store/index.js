// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';

const rootReducer = {
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
