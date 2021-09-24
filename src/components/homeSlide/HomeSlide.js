import React, { useState } from "react";
import "./HomeSlode.css";
import Shoe1 from "assets/images/slideShoe.png";
import Shoe2 from "assets/images/slideShoe1.png";
import Shoe3 from "assets/images/slideShoe2.png";
import Shoe4 from "assets/images/slideShoe.png";
import { ReactComponent as RightArrow } from "assets/svg/rightArrow.svg";
import { ReactComponent as LeftArrow } from "assets/svg/leftArrow.svg";

const myHomeSlider = [Shoe1, Shoe2, Shoe3, Shoe4, Shoe1, Shoe2, Shoe3, Shoe4];

const HomeSlide = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const turnSlideLeft = () => {
    if (slideIndex >= 1) {
      setSlideIndex((prvState) => prvState - 1);
    } else {
      setSlideIndex(7);
    }
  };

  const turnSlideRight = () => {
    if (slideIndex <= 6) {
      setSlideIndex((prvState) => prvState + 1);
    } else {
      setSlideIndex(0);
    }
  };
  return (
    <div className="homeSlide">
      <div className="homeSlide-slider">
          <div>
              <p></p>
          </div>
        <div className="homeSlide-buttons">
          <button onClick={turnSlideLeft} className="homeSlide-button">
            <LeftArrow className="homeSlide-leftArrow" />
          </button>
          <button onClick={turnSlideRight} className="homeSlide-button">
            <RightArrow className="homeSlide-rightArrow" />
          </button>
        </div>
        <div className="homeSlide-images"></div>
        <img
          src={myHomeSlider[slideIndex]}
          alt="img1"
          className="homeSlide-img1"
        />
        <img
          src={slideIndex <= 6 ? myHomeSlider[slideIndex + 1] : myHomeSlider[0]}
          alt="img2"
          className="homeSlide-img2"
        />
        <img
          src={slideIndex <= 5 ? myHomeSlider[slideIndex + 2] : myHomeSlider[0]}
          alt="img3"
          className="homeSlide-img3"
        />
        <img
          src={slideIndex <= 4 ? myHomeSlider[slideIndex + 3] : myHomeSlider[0]}
          alt="img4"
          className="homeSlide-img4"
        />
      </div>
      <div className="homeSlide-detailes"></div>
    </div>
  );
};

export default HomeSlide;
