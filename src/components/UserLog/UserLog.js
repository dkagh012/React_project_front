import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./UserLog.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { IoCalendarClearOutline } from "react-icons/io5";
import "./Calendar.css";

function UserLog() {
  const [value1, setValue1] = useState(null);
  const [BeforeAction1, setBeforeAction1] = useState(false);

  const [value2, setValue2] = useState(null);
  const [BeforeAction2, setBeforeAction2] = useState(false);

  const handleCalendarChange1 = (date) => {
    setValue1(date);
    setBeforeAction1(false);
  };

  const handleCalendarChange2 = (date) => {
    setValue2(date);
    setBeforeAction2(false);
  };

  function handleListOpen1() {
    setBeforeAction1((prev) => !prev);
    setBeforeAction2(false);
  }
  function handleListOpen2() {
    setBeforeAction2((prev) => !prev);
    setBeforeAction1(false);
  }

  const handleReset = () => {
    setValue1(null);
    setValue2(null);
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div className={classes.UserLog}>
          <div className={classes.UserLogLeft}>
            <div className={classes.UserLogLeftTitle}>
              <h1>기간 필터</h1>
              <button type="button" onClick={handleReset}>
                초기화
              </button>
            </div>
            <div className={classes.CalenderBeforeBox}>
              {BeforeAction1 && (
                <Calendar
                  className={classes.CalenderBefore}
                  onChange={handleCalendarChange1}
                  value={value1 || new Date()} // Set the initial value to null or a default date
                  formatDay={(locale, date) =>
                    date.toLocaleString("en", { day: "numeric" })
                  }
                />
              )}
              <div className={classes.CalendarInputBox}>
                <IoCalendarClearOutline />
                <input
                  className={classes.CalendarBeforeInput}
                  onClick={() => handleListOpen1()}
                  value={
                    value1
                      ? moment(value1).format("YYYY년 MM월 DD일")
                      : "년, 월, 일"
                  }
                />
                <p>부터</p>
              </div>
            </div>
            <div className={classes.CalenderBeforeBox}>
              {BeforeAction2 && (
                <Calendar
                  className={classes.CalenderBefore}
                  onChange={handleCalendarChange2}
                  value={value2 || new Date()} // Set the initial value to null or a default date
                  formatDay={(locale, date) =>
                    date.toLocaleString("en", { day: "numeric" })
                  }
                />
              )}
              <div className={classes.CalendarInputBox}>
                <IoCalendarClearOutline />
                <input
                  className={classes.CalendarBeforeInput}
                  onClick={() => handleListOpen2()}
                  value={
                    value2
                      ? moment(value2).format("YYYY년 MM월 DD일")
                      : "년, 월, 일"
                  }
                />
                <p>부터</p>
              </div>
            </div>
          </div>
          <div className={classes.UserLogRight}>
            <h2>[인플루드] 활동 로그</h2>
            <ul>
              <li>
                <p>활동 로그가 없습니다.</p>
              </li>
              <li className={classes.UserLogItem}>
                <span className={classes.UserLogText}>
                  등록 신청하신 업체{" "}
                  <span className={classes.UserLogBold}>인플루드</span>가 등록이
                  완료되었습니다
                </span>
                <h4>2023. 09. 05 오후 03:00</h4>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default UserLog;
