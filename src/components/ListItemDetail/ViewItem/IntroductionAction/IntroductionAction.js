import React from 'react'
import classes from './IntroductionAction.module.scss'
import { IoClose } from "react-icons/io5";
import Button from './../../../UI/Button/Button';
function IntroductionAction(props) {
  return (
    <div className={classes.Popup}>
      <div className={classes.PopupBoxBackground}></div>
      <div className={classes.PopupBox}>
        <div className={classes.Popup_Head}>
          <button type='button' onClick={props.ShowClose}>  <IoClose /></button>
        </div>
        <div className={classes.Popup_Body}>
          <form>
            <div className={classes.companyIntro}>
              <h2>업체 간단 소개</h2>
              <input type='text' value="" />
              <p>30/60</p>
            </div>
            <div className={classes.companyTag}>
              <h2>업체 소개 태그</h2>
              <div>
                <input type='text' placeholder='최대 8자로 태그를 작성해주세요' disabled />
                <button type='button'>추가</button>
              </div>
              <span>태그는 최대 8개까지 등록할 수 있습니다</span>
            </div>
            <Button type="button">변경</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IntroductionAction