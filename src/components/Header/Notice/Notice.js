import React from "react";
import classes from './Notice.module.scss';
import { Link } from 'react-router-dom';
function Notice() {

  return (
    <div className={classes.NoticeBox}>
      <div className={classes.NoticeHeader}>
        <h2>알림</h2>
        <button type="button"> 모두 읽음</button>
      </div>
      <div className={classes.NoticeBody}>
        {/* <ul className={classes.NoticeNoMessage}>
          <h2>알림이 없습니다</h2>
        </ul> */}
        <ul>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>

          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>
          <li>
            <Link to="">
              <div><span className={classes.NoticeTitle}>업체명업체명업체명업체명업체명업체명업체명<span className={classes.NoticeText}>에서나를관리자로초대를했습니다</span></span></div>
              <h2>2023.09.05 오후 03:00</h2>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Notice;