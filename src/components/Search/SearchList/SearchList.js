import React from "react";
import companyImg from "../../../assets/image/companyImg.png";
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import classes from './SearchList.module.scss';
import Subclasses from '../../Home/company/Best_company.module.scss';
import { companiesItem, companiesHashTag, posts } from '../../../DATE/companyDate'; // Import data from data.js
function SearchList() {
  return (
    <section className="container">
      <div>
        <title><span>광고</span><span>인플루드에서 추천하는 업체입니다.</span></title>
        <ul className={`${Subclasses.companyItem} ${classes.SearchList}`}>
          {companiesItem.map((companyItem, index) => {
            if (index < 3) {
              const post = posts.find((post) => post.id === index + 1); // Find the corresponding post
              return (
                <li key={index} className={Subclasses.companyItemLink}>
                  <Link to="#">
                    <div className={Subclasses.companyItemLinkImg}>
                      <img alt={companyItem} src={companyImg}></img>
                    </div>
                    <div className={Subclasses.companyItemLinkInfo}>
                      <div className={Subclasses.companyItemLinkHashTag}>
                        <p>{companiesHashTag[index]}</p>
                      </div>
                      <div className={Subclasses.companyItemLinkTitle}>
                        <h1>{companyItem}</h1>
                      </div>
                      <div className={Subclasses.companyItemLinkDesc}>
                        <span> 선호 파트너 형태</span>
                      </div>
                      {post && ( // Check if post exists
                        <ul className={Subclasses.companyItemLinkTag}>
                          {post.tags.map((tag, index) => (
                            <li key={index}>#{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <div className={classes.SearchListInputBox}>
          <input type="text" placeholder="키워드로 찾으시는 업체를 검색해 보세요"></input>
          <div className={classes.SearchBtn}>
            <BsSearch />
          </div>
        </div>
        <div className={classes.SearchItem}>
          <ul className={classes.ItemTab}>
            <li>최신순</li>
            <li>인기순</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default SearchList;