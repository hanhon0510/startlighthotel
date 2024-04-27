import React from "react";
import MainHeader from "../layout/MainHeader";
import HotelService from "../common/HotelService";
import Parallax from "../common/Parallax";

const Home = () => {
  return (
    <section>
      {/* <h2>Welcome to the homepage</h2> */}
      <MainHeader />
      <div className="container">
        <Parallax />
        <HotelService />
        <Parallax />
      </div>
    </section>
  );
};

export default Home;
