import classes from './App.module.scss';
import Test from './test'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Business from './components/Business/Business '
import BusinessCheck from './components/Business/BusinessList/BusinessCheck/BusinessCheck'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './reset.scss'

function App() {
  return (
    <div className={classes.Wrap}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/BusinessCheck" element={<BusinessCheck />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
