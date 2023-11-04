// 액션 타입 정의
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const HIDE_LOGIN = 'HIDE_LOGIN';

// 액션 생성 함수를 업데이트하여 선택적으로 formName을 받도록 합니다.
export const showLoginAction = (formName) => ({
  type: SHOW_LOGIN,
  payload: formName // 여기서 formName은 'loginForm' 또는 'joinForm' 일 수 있습니다.
});

// 로그인을 숨기는 액션 생성 함수
export const hideLoginAction = () => ({ type: HIDE_LOGIN });