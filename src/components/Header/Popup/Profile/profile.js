import React from 'react'
import classes from './profile.module.scss'
import { Link } from 'react-router-dom';
function profile(props) {
  const { LogOut } = props;
  return (
    <div className={classes.profile}>
      <ul className={classes.profile_List}>
        <li><p>내 프로필</p></li>
        <li><Link><span >계정 설정</span></Link></li>
        <li><Link><span>알림 설정</span></Link></li>
        <li><button type='button' onClick={LogOut} >로그아웃</button></li>
        <li className={classes.profileTop}><p>업체 관리</p></li>
        <li><Link><span>업체 정보</span></Link></li>
        <li><Link><span>업체 방문자</span></Link></li>
        <li><Link><span>활동 로그</span></Link></li>
        <li><Link><span>구독권 관리</span></Link></li>
      </ul>
    </div>
  )
}

export default profile