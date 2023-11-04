import React from "react";
import ViewItem from "./ViewItem/ViewItem"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
function View() {
  return (
    <div>
      <Header />
      <ViewItem />
      <Footer />
    </div>
  )
}

export default View;