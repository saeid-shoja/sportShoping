import React from "react";
import HomeBackground from "../../components/homeBackground/HomeBackground";
import Categories from "components/categories/Categories";
import DiscountBars from "components/discountBar/DiscountBars";
import HomeSlide from "components/homeSlide/HomeSlide";

const Home = () => {
  return (
    <div className="home">
      <HomeBackground />
      <Categories />
      <DiscountBars />
      <HomeSlide/>
    </div>
  );
};

export default Home;
