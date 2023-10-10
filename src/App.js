import classes from './App.module.scss';
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import View from './components/View/View'
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
