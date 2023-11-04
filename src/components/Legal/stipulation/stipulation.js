import React from 'react'
import classes from './stipulation.module.scss';
import Subclasses from '../Legal.module.scss';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
function counseling() {
  return (
    <div>
      <Header />
      <section className="container">
        <div className={Subclasses.title}>
          <h2>서비스 이용약관</h2>
        </div>
        <div className={Subclasses.LinkSwap}>
          <ul className={Subclasses.LinkBtn}>
            <li><a href="/counseling">문의하기</a></li>
            <li ><a href="/individual">개인정보 처리방침</a></li>
            <li className={Subclasses.Clicked}><a href="/stipulation">서비스 이용약관</a></li>
          </ul>
        </div>
        <div className={` ${Subclasses.Desc_wrap} ${classes.st_Desc}`}>
          <h1>제1조 (목적)</h1>
          <p>이 약관은 “인플루드”(이하 “사이트"라 합니다)에서 제공하는 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 "회사"와 회원의 권리 · 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          <h2>제2조 (용어의 정의)</h2>
          <p>본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</p>
          <span>① "사이트"란 "회사"가 운영하고 있는 인터넷 웹사이트인 “인플루드” 및 기타 회사가 제공하는 제반 서비스 일체를 의미합니다.</span>
          <span>② “인플루드 회원" (이하 "회원"이라 한다)이란 "회사"에게 개인정보의 제공을 동의하여 회원 등록을 하고 "하나의 ID"를 부여받은 회원 또는 그 회원 전체를 의미하며, "회원" 등록 시 부여받은 "하나의 ID"로 "사이트"에 자유롭게 접속할 수 있는 회원을 말합니다.</span>
          <span>③ "회원"이란 모든 회원을 의미합니다.</span>
          <span>④ "등록 업체”란 인플루드에서 제공하는 업체 등록 방법으로 등록을 완료한 기업을 의미합니다.</span>
          <span>⑤ "업체”란 모든 기업을 의미합니다.</span>
          <span>⑥ “제휴”란 업체간의 파트너 협업을 위한 방법을 의미합니다.</span>
          <span>⑦ "비회원"이란 "사이트"의 회원으로 가입하지 않고 "서비스"를 이용하는 자를 말합니다.</span>
          <span>⑧ "이용자"란 "사이트"에 접속하여 이 약관에 따라 "회사"가 제공하는 "서비스"를 받는 "회원" 및 "비회원"을 말합니다.</span>
          <span>⑨ "콘텐츠(Contents)"란 "사이트"에서 제공하는 모든 정보를 의미하며, 정보 통신망 이용 촉진 및 정보보호 등에 관한 법률 제2조 제1항 제1호의 규정에 의한 정보통신망에서 사용되는 부호, 문자, 음성, 음향, 이미지 또는 영상 등으로 표현된 자료 또는 정보를 말합니다.</span>
          <span>⑩ “구독권”이란 회원이 유료 서비스를 이용하기 위해 등록한 결제수단을 통하여 이용 요금을 결제하고, 일정 기간동안 유료 서비스를 이용하는 방식을 말합니다.</span>
          <span>⑪ "제휴 채팅”이란 업체간의 제휴 신청을 요청&수락을 완료 후 소통을 할 수 있는 “제휴 채팅”이 생성이 되며 서로간의 파트너 제휴를 위한 정보를 소통할 수 있습니다.</span>
          <span>⑫ “관리자”, “구성원”이란 업체 대표가 업체 관리를 위해 멤버를 초대할 수 있으며 “관리자”, “구성원”는 해당 업체에서 다른 제휴 업체와 파트너 요청을 위해 행동을 할 수 있습니다. 업체 대표는 언제든지 “관리자”, “구성원”를 업체에서 제외할 수 있습니다.</span>
          <h2>제3조 (약관의 효력과 변경)</h2>
          <span>① 본 약관의 내용과 변경 사항은 "사이트"에 게시하거나 기타의 방법으로 "이용자"에게 공지함으로써 효력이 발생합니다.</span>
          <span>② 본 약관은 "사이트"의 각 개별 사이트에 대해서도 효력이 발생하며, "사이트"의 각 개별 사이트는 각 개별 사이트를 통해 "회원"에게 공지하여야 합니다.</span>
          <span>③ 각 개별 사이트 고유의 서비스를 이용하거나 기타 특정한 "사이트"의 서비스를 이용하실 경우에는 본 약관의 내용과 함께 각 개별 사이트 해당 서비스의 약관이 적용됩니다.</span>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default counseling