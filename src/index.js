// src/index.js 또는 애플리케이션 진입 파일
import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot를 가져옴
import { Provider } from 'react-redux'; // react-redux의 Provider 가져오기
import store from './store'; // Redux 스토어 가져오기
import App from './App';

// document.getElementById('root')로 DOM 노드를 찾고 createRoot로 새로운 루트 생성
const container = document.getElementById('root');
const root = createRoot(container);

// root.render 메서드를 이용하여 앱을 렌더링
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
