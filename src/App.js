import classes from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './reset.css'
function App() {
  return (
    <div className={classes.Wrap}>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App;
