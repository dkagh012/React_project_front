import classes from './App.module.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './reset.scss'
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
