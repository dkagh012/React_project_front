import React from "react";
import classes from "./SearchItem.module.css"
import companyImg from "../../../assets/image/companyImg.png"
function SearchItem() {
  return (
    <div>
      <ul className={classes.SearchItem}>
        <li className={classes.SearchInfo}>
          <div className={classes.SearchImg}>
            <img alt="이미지" src={companyImg}></img>
          </div>
          <div>
            <div className={classes.SearchInfoTit}><h2>브랜드이름</h2></div>
            <div className={classes.SearchDesc}><span>동네 기반 O2O 육아 커뮤니티 및 육아친구 매장 플랫폼 - '육아크루'</span></div>
            <div className={classes.SearchHash}><p>선호 파트너 형태</p><div><span>#서비스</span><span>#서비스</span></div></div>
            <div className={classes.SearchInfoText}><span>텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트</span></div>
          </div>
        </li>
        <li className={`${classes.SearchInfo} ${classes.SearchBlur}`}>
          <div className={classes.SearchImg}>
            <img alt="이미지" src={companyImg}></img>
          </div>
          <div>
            <div className={classes.SearchInfoTit}><h2>브랜드이름</h2></div>
            <div className={classes.SearchDesc}><span>동네 기반 O2O 육아 커뮤니티 및 육아친구 매장 플랫폼 - '육아크루'</span></div>
            <div className={classes.SearchHash}><p>선호 파트너 형태</p><div><span>#서비스</span><span>#서비스</span></div></div>
            <div className={classes.SearchInfoText}><span>텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트</span></div>
          </div>
        </li>
        <li className={`${classes.SearchInfo} ${classes.SearchBlur}`}>
          <div className={classes.SearchImg}>
            <img alt="이미지" src={companyImg}></img>
          </div>
          <div>
            <div className={classes.SearchInfoTit}><h2>브랜드이름</h2></div>
            <div className={classes.SearchDesc}><span>동네 기반 O2O 육아 커뮤니티 및 육아친구 매장 플랫폼 - '육아크루'</span></div>
            <div className={classes.SearchHash}><p>선호 파트너 형태</p><div><span>#서비스</span><span>#서비스</span></div></div>
            <div className={classes.SearchInfoText}><span>텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트</span></div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SearchItem;