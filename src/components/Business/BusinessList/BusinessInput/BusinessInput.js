import React, { useState, useRef } from "react";
import classes from "./BusinessInput.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import { PiDownloadSimpleBold } from "react-icons/pi";
function BusinessInput({ onNextStep }) {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const updateEmail = (newEmail) => {
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  // 이메일 형식 검사 함수
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  // submit 후 페이지 이동
  const handleSubmit = (event) => {
    event.preventDefault();
    // Step 1 submission logic

    const formDataStep1 = {}; // Capture form data of Step 1
    onNextStep(formDataStep1); // Move to the next step with captured data
  };
  // ul li를 select처럼 만든함수
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef(null);
  const [openSection, setOpenSection] = useState(null);

  const [selectedValues, setSelectedValues] = useState({
    businessType: '',
    businessStatus: '',
    corporationType: '',
  });
  const SelectOpen = (section) => {
    setOpenSection(openSection === section ? null : section);
  };


  const handleSelectValueClick = (section, value) => {
    setSelectedValues(prevValues => ({
      ...prevValues,
      [section]: value,
    }));
    setOpenSection(null);
  };
  // 사진 넣는 함수
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleFakeFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2 className={classes.BusinessTitle}>업체등록</h2>
        <span className={classes.BusinessDesc}>아래 입력해주신 정보를 검토 후 업체 등록이 완료가 됩니다</span>
        <ul className={classes.BusinessActive}>
          <li className={classes.Active}></li>
          <li></li>
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

          <input type="date" max="9999-12-31"></input>
        </div>
        <div className={classes.BusinessInfo}>
          <h1>업체 구분</h1>
          <input type="hidden" value={selectedValues.businessType}></input>
          <span onClick={() => SelectOpen('businessType')} className={classes.BusinessSelectValue}>
            {selectedValues.businessType || 'Please select'}
            <p className={classes.businessIcon}><FaAngleDown /></p>
          </span>
          {openSection === 'businessType' && (
            <ul className={classes.BusinessSelect}>
              <li onClick={() => handleSelectValueClick('businessType', 'Test 1')}>Test 1</li>
              <li onClick={() => handleSelectValueClick('businessType', 'Test 2')}>Test 2</li>
              <li onClick={() => handleSelectValueClick('businessType', 'Test 3')}>Test 3</li>
              <li onClick={() => handleSelectValueClick('businessType', 'Test 4')}>Test 4</li>
            </ul>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h1>업체 상태</h1>
          <input type="hidden" value={selectedValues.businessStatus}></input>
          <span onClick={() => SelectOpen('businessStatus')} className={classes.BusinessSelectValue}>
            {selectedValues.businessStatus || 'Please select'}
            <p className={classes.businessIcon}><FaAngleDown /></p>
          </span>
          {openSection === 'businessStatus' && (
            <ul className={classes.BusinessSelect}>
              <li onClick={() => handleSelectValueClick('businessStatus', 'Test 1')}>Test 1</li>
              <li onClick={() => handleSelectValueClick('businessStatus', 'Test 2')}>Test 2</li>
              <li onClick={() => handleSelectValueClick('businessStatus', 'Test 3')}>Test 3</li>
              <li onClick={() => handleSelectValueClick('businessStatus', 'Test 4')}>Test 4</li>
            </ul>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h1>법인 구분</h1>
          <input type="hidden" value={selectedValues.corporationType}></input>
          <span onClick={() => SelectOpen('corporationType')} className={classes.BusinessSelectValue}>
            {selectedValues.corporationType || 'Please select'}
            <p className={classes.businessIcon}><FaAngleDown /></p>
          </span>
          {openSection === 'corporationType' && (
            <ul className={classes.BusinessSelect}>
              <li onClick={() => handleSelectValueClick('corporationType', 'Test 1')}>Test 1</li>
              <li onClick={() => handleSelectValueClick('corporationType', 'Test 2')}>Test 2</li>
              <li onClick={() => handleSelectValueClick('corporationType', 'Test 3')}>Test 3</li>
              <li onClick={() => handleSelectValueClick('corporationType', 'Test 4')}>Test 4</li>
            </ul>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h2>업체 위치</h2>
          <span>업체의 전체 주소를 입력해 주세요</span>
          <input type="text" placeholder="내용을 입력해 주세요" ></input>
        </div>
        <div className={classes.BusinessInfo}>
          <h2>업체 이메일 주소</h2>
          <span>업체에서 대표로 사용하고 있는 비즈니스 이메일 주소를 입력해 주세요</span>
          <input type="text" placeholder="내용을 입력해 주세요" value={email} onChange={(e) => updateEmail(e.target.value)}></input>
          {!isEmailValid && (
            <span className={classes.BusinessEmailCheck}>이메일 형식이 맞지 않습니다.</span>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h2>업체 대표 주소 또는 SNS</h2>
          <span>업체의 웹사이트 주소 또는 대표 SNS 주소를 입력해 주세요</span>
          <input type="text" placeholder="내용을 입력해 주세요" ></input>
        </div>
        <div className={classes.BusinessInfo}>
          <h2>사업자 등록증</h2>
          <span>사업자 등록증을 업로드 해주세요</span>
          {/* <label for="file">파일찾기 <input type="file" placeholder="JPG, PNG 파일만 업로드 가능합니다" ></input></label> */}
          <label htmlFor="attached">
            <input
              id="attached"
              type="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }} // Hide the real file input
            />
            <input
              type="text"
              placeholder="JPG, PNG 파일만 업로드 가능합니다"
              value={fileName}
              readOnly
              tabIndex="-1"
              onClick={handleFakeFileClick}
            />
            <span className={classes.btn} onClick={handleFakeFileClick}><PiDownloadSimpleBold /></span>
          </label>
        </div>
        <button className={classes.BusinessNextBtn} type="submit" >다음</button>
      </form>
    </section>
  )
}

export default BusinessInput;