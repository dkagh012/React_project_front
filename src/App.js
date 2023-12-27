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
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./reset.scss";

function App() {
  return (
    <div className={classes.Wrap}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/View" element={<View />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/stipulation" element={<Stipulation />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/UserDelete" element={<UserDelete />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route
            path="/BusinessPartnershipList"
            element={<BusinessPartnershipList />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
