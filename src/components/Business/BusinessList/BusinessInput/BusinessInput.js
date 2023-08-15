import React, { useState, useRef } from "react";
import classes from "./BusinessInput.module.scss";
import { FaAngleDown } from "react-icons/fa6";
import { FiAlertTriangle } from 'react-icons/fi';
import { PiDownloadSimpleBold } from "react-icons/pi";
import DaumPostcode from 'react-daum-postcode';
function BusinessInput({ onNextStep }) {
  const [inputValues, setInputValues] = useState({
    KoTitle: '',
    EnTitle: '',
    date: '',
    businessType: '',
    businessStatus: '',
    corporationType: '',
    address: '',
    email: '',
    SNS: '',
    file: '',
  });
  // 주소찾기 API
  const [openPostcode, setOpenPostcode] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({
    address: '',
    zonecode: ''
  });
  const handle = {
    clickButton: () => {
      setOpenPostcode(current => !current);
    },
    selectAddress: (data) => {
      const { address, zonecode } = data;
      setSelectedAddress({ address, zonecode });
      setOpenPostcode(false);
      setInputValues(prevInputValues => ({
        ...prevInputValues,
        address: address // Update the address field in inputValues state
      }));
    },
  };
  // 이메일 관련 함수
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  // submit 후 페이지 이동
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!inputValues.KoTitle) {
      console.log("KoTitle")
      return;
    }
    if (!inputValues.EnTitle) {
      console.log("EnTitle")
      return;
    }

    if (!inputValues.date) {
      console.log("date")
      return;
    }
    if (!selectedValues.businessType) {
      console.log("BusinessType")
      return;
    }
    if (!selectedValues.businessStatus) {
      console.log("businessStatus")
      return;
    }
    if (!selectedValues.corporationType) {
      console.log("corporationType")
      return;
    }
    if (!inputValues.address) {
      console.log("address")
      return;
    }
    if (inputValues.email.length < 7) {
      console.log("7")
      return;
    } else if (!isEmailValid) {
      console.log("isEmailValid")
      return;
    }
    if (!inputValues.SNS || inputValues.SNS.length < 7) {
      console.log("SNS")
      return;
    }
    if (!inputValues.file) {
      console.log("file")
      return;
    }
    // Submit the form
    const formDataStep1 = { ...inputValues };
    onNextStep(formDataStep1);
  };
  const emailErrorMessage = (
    <span className={classes.BusinessDanger}><FiAlertTriangle /> The email format is incorrect.</span>
  );
  // ul li를 select처럼 만든함수
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
      setInputValues(prevInputValues => ({
        ...prevInputValues,
        file: files[0].name // Update the address field in inputValues state
      }));
    } else {
      setInputValues(prevInputValues => ({
        ...prevInputValues,
        file: "" // Update the address field in inputValues state
      }));
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
          <input
            type="text"
            id="KoTitle"
            value={inputValues.KoTitle}
            onChange={(e) => setInputValues({ ...inputValues, KoTitle: e.target.value })}
            placeholder="내용을 입력해주세요 ex)OOO컴퍼니"
          />
          {isSubmitted && !inputValues.KoTitle && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please fill out the Company or business name (Korean) field.</span>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h2>회사 또는 업체의 이름 (영어)</h2>
          <span>법인명 또는 업체의 이름을 영어로 입력해 주세요</span>
          <input
            type="text"
            id="KoTitle"
            value={inputValues.EnTitle}
            onChange={(e) => setInputValues({ ...inputValues, EnTitle: e.target.value })}
            placeholder="내용을 입력해 주세요 ex) OOOcompany"
          />
          {isSubmitted && !inputValues.EnTitle && inputValues.address.length < 10 && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please fill out the Company or business name (Korean) field.</span>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h1>설립일</h1>
          <input
            type="date"
            id="date"
            max="9999-12-31"
            value={inputValues.date}
            onChange={(e) => setInputValues({ ...inputValues, date: e.target.value })}
          />
          {isSubmitted && !inputValues.date && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please select the Date of establishment.</span>
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h1>업체 구분</h1>
          <input type="hidden" value={selectedValues.businessType}></input>
          <span onClick={() => SelectOpen('businessType')} className={classes.BusinessSelectValue}>
            {selectedValues.businessType || 'Please select'}
            <p className={classes.businessIcon}><FaAngleDown /></p>
          </span>
          {isSubmitted && !selectedValues.businessType && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please select a value for 업체 구분.</span>
          )}
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
          <input type="hidden" id="businessStatus" value={selectedValues.businessStatus}></input>
          <span onClick={() => SelectOpen('businessStatus')} className={classes.BusinessSelectValue}>
            {selectedValues.businessStatus || 'Please select'}
            <p className={classes.businessIcon}><FaAngleDown /></p>
          </span>
          {isSubmitted && !selectedValues.businessStatus && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please select a value for 업체 구분.</span>
          )}
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
          <input type="hidden" id="corporationType" value={selectedValues.corporationType}></input>
          <span onClick={() => SelectOpen('corporationType')} className={classes.BusinessSelectValue}>
            {selectedValues.corporationType || 'Please select'}
            <p className={classes.businessIcon}><FaAngleDown /></p>
          </span>
          {isSubmitted && !selectedValues.corporationType && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please select a value for 업체 구분.</span>
          )}
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
          <input
            type="text"
            id="address"
            placeholder="내용을 입력해 주세요"
            value={inputValues.address}
            onClick={handle.clickButton}
            readOnly
            onChange={(e) => setInputValues({ ...inputValues, address: e.target.value })}
          ></input>
          {isSubmitted && !inputValues.address && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please fill out the Company or business name (Korean) field.</span>
          )}
          {openPostcode && (
            <DaumPostcode
              onComplete={handle.selectAddress}
              autoClose={false}
              defaultQuery="Pangyoyeok-ro 235"
            />
          )}
        </div>
        <div className={classes.BusinessInfo}>
          <h2>업체 이메일 주소</h2>
          <span>업체에서 대표로 사용하고 있는 비즈니스 이메일 주소를 입력해 주세요</span>
          <input type="text"
            id="email"
            placeholder="내용을 입력해 주세요"
            className={isEmailValid ? '' : classes.danger}
            value={email}
            onChange={(e) => {
              const newEmail = e.target.value;
              setEmail(newEmail);
              updateEmail(e.target.value)
              setIsEmailValid(validateEmail(newEmail));
              setInputValues({ ...inputValues, email: newEmail });
            }}
          />
          {!isEmailValid || (!inputValues.email && isSubmitted) ? emailErrorMessage : null}
        </div>
        <div className={classes.BusinessInfo}>
          <h2>업체 대표 주소 또는 SNS</h2>
          <span>업체의 웹사이트 주소 또는 대표 SNS 주소를 입력해 주세요</span>
          <input
            type="text"
            id="SNS"
            value={inputValues.SNS}
            onChange={(e) => setInputValues({ ...inputValues, SNS: e.target.value })}
            placeholder="내용을 입력해 주세요" ></input>
          {isSubmitted && !inputValues.SNS && (
            <span className={classes.BusinessDanger}><FiAlertTriangle /> Please select the Date of establishment.</span>
          )}
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
              id="registration"
              placeholder="JPG, PNG 파일만 업로드 가능합니다"
              value={inputValues.file}
              readOnly
              tabIndex="-1"
              onChange={(e) => setInputValues({ ...inputValues, file: e.target.value })}
              onClick={handleFakeFileClick}
            />
            <span className={classes.btn} onClick={handleFakeFileClick}><PiDownloadSimpleBold /></span>
            {isSubmitted && !inputValues.file && (
              <span className={classes.BusinessDanger}><FiAlertTriangle /> Please fill out the Company or business name (Korean) field.</span>
            )}
          </label>
        </div>
        <button className={classes.BusinessNextBtn} type="submit" >다음</button>
      </form>
    </section>
  )
}

export default BusinessInput;