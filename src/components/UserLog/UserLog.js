import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./UserLog.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { IoCalendarClearOutline } from "react-icons/io5";
function UserLog() {
  const [value, onChange] = useState(new Date());
  const [BeforeAction, setBeforeAction] = useState(false);

  function handleListOpen(element) {
    element((prev) => !prev);
  }
  return (
    <div>
      <Header />
      <main className="container">
        <div className={classes.UserLogLeft}>
          <div className={classes.UserLogLeftTitle}>
            <h1>기간 필터</h1>
            <button type="button">초기화</button>
          </div>
          <div className={classes.CalenderBeforeBox}>
            {BeforeAction && (
              <Calendar
                className={classes.CalenderBefore}
                onChange={onChange}
                value={value}
              ></Calendar>
            )}
            <div>
              <IoCalendarClearOutline />
              <input
                className={classes.CalendarBeforeInput}
                onClick={() => handleListOpen(setBeforeAction)}
                value={moment(value).format("YYYY년 MM월 DD일")}
              />
              <p>부터</p>
            </div>
          </div>
        </div>
        <div className={classes.UserLogLeft}></div>
      </main>
      <Footer />
    </div>
  );
}

export default UserLog;
