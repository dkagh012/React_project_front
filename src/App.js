import classes from './App.module.scss';
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './reset.scss'

function App() {
  return (
    <div className={classes.Wrap}>
      <BrowserRouter>
        <Routes>
          {/* Web service introduction page */}
          <Route path="/" element={<Home />} />
          {/* <SignIn /> */}
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
