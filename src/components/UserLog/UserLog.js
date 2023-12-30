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
  const [value, setValue] = useState(null);
  const [BeforeAction, setBeforeAction] = useState(false);

  const handleCalendarChange = (date) => {
    setValue(date);
    setBeforeAction(false);
  };

  function handleListOpen(element) {
    element((prev) => !prev);
  }
  const handleReset = () => {
    setValue(null);
  };

  return (
    <div>
      <Header />
      <main className="container">
        <div className={classes.UserLogLeft}>
          <div className={classes.UserLogLeftTitle}>
            <h1>기간 필터</h1>
            <button type="button" onClick={handleReset}>
              초기화
            </button>
          </div>
          <div className={classes.CalenderBeforeBox}>
            {BeforeAction && (
              <Calendar
                className={classes.CalenderBefore}
                onChange={handleCalendarChange}
                value={value || new Date()} // Set the initial value to null or a default date
                formatDay={(locale, date) =>
                  date.toLocaleString("en", { day: "numeric" })
                }
              />
            )}
            <div className={classes.CalendarInputBox}>
              <IoCalendarClearOutline />
              <input
                className={classes.CalendarBeforeInput}
                onClick={() => handleListOpen(setBeforeAction)}
                value={
                  value
                    ? moment(value).format("YYYY년 MM월 DD일")
                    : "년, 월, 일"
                }
              />
              <p>부터</p>
            </div>
          </div>
          <div className={classes.CalenderBeforeBox}>
            {BeforeAction && (
              <Calendar
                className={classes.CalenderBefore}
                onChange={handleCalendarChange}
                value={value || new Date()} // Set the initial value to null or a default date
                formatDay={(locale, date) =>
                  date.toLocaleString("en", { day: "numeric" })
                }
              />
            )}
            <div className={classes.CalendarInputBox}>
              <IoCalendarClearOutline />
              <input
                className={classes.CalendarBeforeInput}
                onClick={() => handleListOpen(setBeforeAction)}
                value={
                  value
                    ? moment(value).format("YYYY년 MM월 DD일")
                    : "년, 월, 일"
                }
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
