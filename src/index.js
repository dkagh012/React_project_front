// src/index.js 또는 애플리케이션 진입 파일
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // react-redux의 Provider 가져오기
import store from './store'; // Redux 스토어 가져오기
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
