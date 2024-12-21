import React from "react";
import Banner from '../../components/Banner/Banner';
import Brone from '../../components/Brone/Brone';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Our_Services from '../../components/Our_Services/Our_Services';
import Spare from '../../components/Spare/Spare';

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="flex flex-col justify-center items-center w-full">
        <Banner />
        <Our_Services />
        <Spare />
        <Brone />
        <FAQ />
      </div>
    </div>
  );
};

export default MainPage;
