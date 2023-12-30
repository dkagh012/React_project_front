import classes from "./App.module.scss";
import Home from "./components/Main/Main";
import Search from "./components/SearchPage/Search";
import View from "./components/ListItemDetail/View";
import Counseling from "./components/Legal/counseling/counseling";
import Individual from "./components/Legal/individual/individual";
import Stipulation from "./components/Legal/stipulation/stipulation";
import Settings from "./components/UserProfile/Settings/Settings";
import UserDelete from "./components/UserProfile/UserDelete/UserDelete";
import Notifications from "./components/UserProfile/Notifications/Notifications";
import BusinessPartnershipList from "./components/BusinessPartnershipList/BusinessPartnershipList";
import UserLog from "./components/UserLog/UserLog";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./reset.scss";

function App() {
  return (
    <div className={classes.Wrap}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 업체검색 */}
          <Route path="/Search" element={<Search />} />
          {/*업체 정보*/}
          <Route path="/business" element={<View />} />
          {/* 문의하기 */}
          <Route path="/counseling" element={<Counseling />} />
          {/* 개인정보처리방침 */}
          <Route path="/individual" element={<Individual />} />
          {/* 서비스 이용약관 */}
          <Route path="/stipulation" element={<Stipulation />} />
          {/* 계정 설정 */}
          <Route path="/Settings" element={<Settings />} />
          {/* 계정 삭제 */}
          <Route path="/UserDelete" element={<UserDelete />} />
          {/* 알림 설정 */}
          <Route path="/Notifications" element={<Notifications />} />
          {/* 알림 방문자 */}
          <Route
            path="/BusinessPartnershipList"
            element={<BusinessPartnershipList />}
          />
          {/* 활동 로그 */}
          <Route path="/UserLog" element={<UserLog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
