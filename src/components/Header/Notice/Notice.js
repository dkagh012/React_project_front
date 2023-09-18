import React from "react";
import classes from './Notice.module.scss';

function Notice() {

  return (
    <div>
      <div className={classes.NoticeHeader}>
        <h2>알림</h2>
        <button type="button"> 모두 읽음</button>
      </div>
      <div className={classes.NoticeBody}>
        <ul>
          <li>
            <span>업체명업체명업체명업체명업체명업체명업체명에서나를관리자로초대를했습니다</span>
            <h2>2023.09.05 오후 03:00</h2>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Notice;