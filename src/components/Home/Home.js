import React from "react";
import Swiper from "./Swiper/SwiperPage";
import Bestcompany from "./company/Best_company";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Home() {
  return (
    <main >
      <Header />
      <Swiper />
      <Bestcompany />
      <Footer />
    </main>
  )
}
export default Home;