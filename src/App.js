import classes from './App.module.scss';
import Home from './components/Main/Main'
import Search from './components/SearchPage/Search'
import View from './components/ListItemDetail/View'
import Counseling from './components/Legal/counseling/counseling'
import Individual from './components/Legal/individual/individual'
import Stipulation from './components/Legal/stipulation/stipulation'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './reset.scss'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
