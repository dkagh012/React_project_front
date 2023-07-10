import classes from './App.module.css';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer'
// import Home from './components/Home/Home'
function App() {
  return (
    <div className={classes.Wrap}>
      <Header />
      {/* <Home />
      <Footer /> */}
      {/* <h1>테스트</h1> */}
    </div>
  )
}

export default App;
