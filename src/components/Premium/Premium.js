import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Premium.module.scss";
import Button from "../UI/Button/Button";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
function Premium() {
  const [PriceAction, setPriceAction] = useState(false);
  const [IntroAction, setIntroAction] = useState(false);
  const [IntroAction2, setIntroAction2] = useState(false);
  const [IntroAction3, setIntroAction3] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [birthOrRegistration, setBirthOrRegistration] = useState("");

  function handleListOpen(element) {
    element((prev) => !prev);
  }
  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handlePayment = () => {
    // Handle the payment logic using the state variables
    // cardNumber, expiryDate, cardPassword, and birthOrRegistration
  };

  return (
    <div>
      <Header />
      <main className="container">
        {PriceAction && (
          <div className={classes.PriceWrap}>
            <div
              className={classes.PriceBoxBackground}
              onClick={() => handleListOpen(setPriceAction)}
            ></div>
            <div className={classes.PriceBox}>
              <div className={classes.PriceTop}>
                <button
                  type="button"
                  onClick={() => handleListOpen(setPriceAction)}
                >
                  <IoClose />
                </button>
              </div>
              <div className={classes.PriceBody}>
                <div className={classes.Price}>
                  <p>프리미엄 구독 결제</p>
                  <span className={classes.PriceBold}>
                    55.000원<span>/ 월 (VAT 10% 포함)</span>
                  </span>
                </div>
                <div className={classes.PriceInputBox}>
                  <div>
                    <h1>카드번호</h1>
                    <input
                      type="number"
                      value={cardNumber}
                      onChange={(e) => handleInputChange(e, setCardNumber)}
                    />
                  </div>
                  <div>
                    <h1>유효 기간(MM/YY)</h1>
                    <input
                      type="number"
                      value={expiryDate}
                      onChange={(e) => handleInputChange(e, setExpiryDate)}
                    />
                  </div>
                  <div>
                    <h1>카드 비밀번호 (앞 2자리)</h1>
                    <input
                      type="password"
                      value={cardPassword}
                      onChange={(e) => handleInputChange(e, setCardPassword)}
                    />
                  </div>
                  <div>
                    <h1>생년월일(개인) 또는 사업자등록번호(법인)</h1>
                    <input
                      type="number"
                      value={birthOrRegistration}
                      onChange={(e) =>
                        handleInputChange(e, setBirthOrRegistration)
                      }
                    />
                  </div>
                  <Button type="button" onClick={handlePayment}>
                    결제
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={classes.PremiumWrap}>
          <div className={classes.PremiumTop}>
            <h1 className={classes.PremiumTitle}>[인플루드] 프리미엄 구독</h1>
            <div className={classes.PremiumDesc}>
              <div className={classes.PremiumPriceBox}>
                <div className={classes.PremiumPrice}>
                  <span className={classes.PremiumBold}>
                    55.000원<span>/ 월(VAT 10%포함)</span>
                  </span>
                  <Button
                    onClick={() => handleListOpen(setPriceAction)}
                    className={classes.PriceBtn}
                    type="button"
                  >
                    결제하기
                  </Button>
                </div>
              </div>
              <div className={classes.PremiumPriceManual}>
                <ul>
                  <li>
                    <span>제휴 업체 추천 제공</span>
                  </li>
                  <li>
                    <span>업체 검색 더보기 무제한 제공</span>
                  </li>
                  <li>
                    <span>방문한 업체 확인</span>
                  </li>
                  <li>
                    <span>방문한 업체들의 산업 분야 정보 제공</span>
                  </li>
                  <li>
                    <span>방문한 업체들의 선호 제휴 업체 정보 제공</span>
                  </li>
                  <li>
                    <span>방문한 업체들의 업체 분류 정보 제공</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.PremiumManual}>
            <div className={classes.PremiumLeftManual}>
              <h1>자주 묻는 질문</h1>
            </div>
            <div className={classes.PremiumRightManual}>
              <ul>
                <li>
                  <div
                    onClick={() => handleListOpen(setIntroAction)}
                    className={classes.PremiumManualDownBtn}
                  >
                    <span>프리미엄 구독을 사용하면 어떤점이 좋은가요?</span>
                    <div className={`${IntroAction ? classes.Click : ""}`}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  {IntroAction && (
                    <div className={classes.PremiumManualDownText}>
                      <p>
                        프리미엄 구독은 자신의 업체와 맞는 제휴 업체를 찾기 위해
                        필요한 서비스입니다. 자신의 업체와 맞는 제휴 업체를
                        무제한으로 탐색하며 자신의 업체에 관심이 있는 업체를
                        분석하고 최적의 제휴 업체를 찾을 수 있습니다.
                        <br />
                        <br />
                        방문 업체 분석뿐만 아니라 자신의 업체와 맞는 업체를
                        추천을 제공하여 다양한 제휴 업체를 찾는 분에게
                        유용합니다.
                      </p>
                    </div>
                  )}
                </li>
                <li>
                  <div
                    onClick={() => handleListOpen(setIntroAction2)}
                    className={classes.PremiumManualDownBtn}
                  >
                    <span>
                      한 계정에 여러 개의 업체가 있다면 업체마다 구독이 공유가
                      가능한가요?
                    </span>
                    <div className={`${IntroAction2 ? classes.Click : ""}`}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  {IntroAction2 && (
                    <div className={classes.PremiumManualDownText}>
                      <p>
                        프리미엄 구독은 공유가 불가능합니다. 한 계정에 여러 개의
                        업체가 있을 경우 각 업체마다 프리미엄 구독을 구매를
                        해주셔야 합니다. 업체마다 대표가 프리미엄 구독을 구매할
                        수 있으며 대표가 구매를 완료하는 경우 구성원 멤버들도
                        프리미엄 구독을 사용할 수 있습니다.
                      </p>
                    </div>
                  )}
                </li>
                <li>
                  <div
                    onClick={() => handleListOpen(setIntroAction3)}
                    className={classes.PremiumManualDownBtn}
                  >
                    <span>프리미엄 구독을 사용하면 어떤점이 좋은가요?</span>
                    <div className={`${IntroAction3 ? classes.Click : ""}`}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                  {IntroAction3 && (
                    <div className={classes.PremiumManualDownText}>
                      <p>
                        사용자의 업체 분류, 산업 분야, 선호 제휴 업체 정보에
                        따라 사용자 업체에 맞는 제휴 업체를 추천을 해드립니다
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Premium;
