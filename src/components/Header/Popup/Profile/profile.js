import React from "react";
import classes from "./profile.module.scss";
import { Link } from "react-router-dom";

function Profile(props) {
  const { LogOut } = props;
  return (
    <div className={classes.Profile}>
      <ul className={classes.ProfileList}>
        <li>
          <p>내 프로필</p>
        </li>
        <li>
          <Link to="/Settings">
            <span>계정 설정</span>
          </Link>
        </li>
        <li>
          <Link to="/Notifications">
            <span>알림 설정</span>
          </Link>
        </li>
        <li>
          <button type="button" onClick={LogOut}>
            로그아웃
          </button>
        </li>
        <li className={classes.ProfileTop}>
          <p>업체 관리</p>
        </li>
        <li>
          <Link to="/business">
            <span>업체 정보</span>
          </Link>
        </li>
        <li>
          <Link to="/BusinessPartnershipList">
            <span>업체 방문자</span>
          </Link>
        </li>
        <li>
          <Link to="/UserLog">
            <span>활동 로그</span>
          </Link>
        </li>
        <li>
          <Link to="/subscription">
            <span>구독권 관리</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
