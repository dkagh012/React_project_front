import React from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import classes from './UserDelete.module.scss'
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
function UserDelete() {
  return (
    <div>
      <Header />
      <section className='container'>
        <h4>회원탈퇴</h4>
        <div className={classes.UserDeleteWrap}>
          <div>
            <p>사용하고 계신 계정(alskdjaslkdj@gmail.com)은 탈퇴 신청 후 최대 1주 내 삭제될 예정이며 탈퇴 신청이 완료된 후 회원 정보 및 개인 기록은 삭제됩니다.</p>
          </div>
          <div>
            <span>탈퇴한 계정은 한번 삭제 후 다시 복구할 수 없습니다</span>
            <span>탈퇴 신청이 완료된 후 해당 이메일로 재가입 가능합니다</span>
          </div>
          <div>
            <p>사용하고 계신 계정(alskdjaslkdj@gmail.com)은 탈퇴 신청 후 최대 1주 내 삭제될 예정이며 탈퇴 신청이 완료된 후 회원 정보 및 개인 기록은 삭제됩니다.</p>
          </div>
          <div>
            <h1>결제한 금액은 <Link to="/Refund">환불 정책</Link>에 따라 자동 환불됩니다.</h1>
          </div>
        </div>
        <Button type="button" className={classes.UserDeletePopup}></Button>
      </section>
      <Footer />
    </div>
  )
}

export default UserDelete