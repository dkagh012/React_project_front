import React from "react";
import classes from "../BusinessInput/BusinessInput.module.scss";
function BusinessCheck() {
  return (
    <div>
      <section className="container">
        <form action="">
          <h2 className={classes.BusinessTitle}>업체등록</h2>
          <span className={classes.BusinessDesc}>아래 입력해주신 정보를 검토 후 업체 등록이 완료가 됩니다</span>
          <ul className={classes.BusinessActive}>
            <li></li>
            <li className={classes.Active}></li>
            <li></li>
          </ul>
          <div className={classes.BusinessInfo}>
            <h2>회사 또는 업체의 이름(한글)</h2>
            <span>법인명 또는 업체의 이름을 입력해주세요</span>
            <input type="text" placeholder="내용을 입력해주세요 ex)OOO컴퍼니" ></input>
          </div>
          <div className={classes.BusinessInfo}>
            <h2>회사 또는 업체의 이름 (영어)</h2>
            <span>법인명 또는 업체의 이름을 영어로 입력해 주세요</span>
            <input type="text" placeholder="내용을 입력해 주세요 ex) OOOcompany" ></input>
          </div>
          <div className={classes.BusinessInfo}>
            <h1>설립일</h1>
            <input type="text" placeholder="연도. 월. 일" ></input>
          </div>
          <div className={classes.BusinessInfo}>
            <h1>업체 구분</h1>
            <select>
              <option value='' selected>선택해 주세요</option>
            </select>
          </div>
          <div className={classes.BusinessInfo}>
            <h1>업체 상태</h1>
            <select>
              <option value='' selected>선택해 주세요</option>
            </select>
          </div>
          <div className={classes.BusinessInfo}>
            <h1>법인 구분</h1>
            <select>
              <option value='' selected>선택해 주세요</option>
            </select>
          </div>
          <div className={classes.BusinessInfo}>
            <h2>업체 위치</h2>
            <span>업체의 전체 주소를 입력해 주세요</span>
            <input type="text" placeholder="내용을 입력해 주세요" ></input>
          </div>
          <div className={classes.BusinessInfo}>
            <h2>업체 이메일 주소</h2>
            <span>업체에서 대표로 사용하고 있는 비즈니스 이메일 주소를 입력해 주세요</span>
            <input type="text" placeholder="내용을 입력해 주세요" ></input>
          </div>
          <div className={classes.BusinessInfo}>
            <h2>업체 대표 주소 또는 SNS</h2>
            <span>업체의 웹사이트 주소 또는 대표 SNS 주소를 입력해 주세요</span>
            <input type="text" placeholder="내용을 입력해 주세요" ></input>
          </div>
          <div className={classes.BusinessInfo}>
            <h2>사업자 등록증</h2>
            <span>사업자 등록증을 업로드 해주세요</span>
            <input type="file" placeholder="JPG, PNG 파일만 업로드 가능합니다" ></input>
          </div>
          <button className={classes.BusinessNextBtn} type="submit" >다음</button>
        </form>
      </section>
    </div>
  )
}

export default BusinessCheck;