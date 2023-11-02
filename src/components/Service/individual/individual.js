import React from 'react'
import classes from './individual.module.scss';
import Subclasses from '../Service.module.scss';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
function individual() {
  return (
    <div>
      <Header />
      <section className="container">
        <div className={Subclasses.title}>
          <h2>개인정보 처리방침</h2>
        </div>
        <div className={Subclasses.LinkSwap}>
          <ul className={Subclasses.LinkBtn}>
            <li><a href="/counseling">문의하기</a></li>
            <li className={Subclasses.Clicked}><a href="/individual">개인정보 처리방침</a></li>
            <li><a href="/stipulation">서비스 이용약관</a></li>
          </ul>
        </div>
        <div className={`${classes.Text} ${Subclasses.Desc_wrap}`}>
          <h1>제1조(목적)</h1>
          <p>인플루드(이하 ‘회사'라고 함)는 회사가 제공하고자 하는 서비스(이하 ‘회사 서비스’)를 이용하는 개인(이하 ‘이용자’ 또는 ‘개인’)의 정보(이하 ‘개인정보’)를 보호하기 위해, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 '정보통신망법') 등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침(이하 ‘본 방침’)을 수립합니다.</p>
          <h1>제2조(개인정보 처리의 원칙)</h1>
          <p>개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를 수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해 제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게 강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의 없이 제3자에게 제공할 수도 있습니다.</p>
          <h1>제3조(본 방침의 공개)</h1>
          <span>1. 회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사 홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을 공개하고 있습니다.</span>
          <span>2. 회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을 활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.</span>
          <h1>제4조(본 방침의 변경)</h1>
          <span>1. 본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사 서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.</span>
          <span>2. 회사는 제1항에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로 공지합니다.</span>
          <h4>a. 회사가 운영하는 인터넷 홈페이지의 첫 화면의 공지사항란 또는 별도의 창을 통하여 공지하는 방법</h4>
          <h4>b. 서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게 공지하는 방법</h4>
          <span>3. 회사는 제2항의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에 공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소 30일 전에 공지합니다.</span>
          <h1>제5조(회원 가입을 위한 정보)</h1>
          <p>회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은 정보를 수집합니다.</p>
          <span>1. 필수 수집 정보: 이메일 주소, 비밀번호 및 이름</span>
          <h1>제6조(결제 서비스를 위한 정보)</h1>
          <p>회사는 이용자에게 회사의 결제 서비스 제공을 위하여 다음과 같은 정보를 수집합니다.</p>
          <span>1. 필수 수집 정보: 카드번호, 카드비밀번호, 유효기간 및 생년월일 6자리(yy/mm/dd)</span>
          <h1>제7조(회사 서비스 제공을 위한 정보)</h1>
          <p>회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은 정보를 수집합니다.</p>
          <span>1. 필수 수집 정보: 아이디, 이메일 주소, 이름, 생년월일 및 연락처</span>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default individual