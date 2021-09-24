import React, { useState } from "react";
import "./DiscountBars.css";
import DiscountBar from "./DiscountBar";
import Short1 from "assets/images/tie1.png";
import Short2 from "assets/images/tie2.png";
import Short3 from "assets/images/tie3.png";
import Short4 from "assets/images/tie4.png";
import Short5 from "assets/images/tie2.png";
import Short6 from "assets/images/tie1.png";
import { ReactComponent as RightArrow } from "assets/svg/rightArrow.svg";
import { ReactComponent as LeftArrow } from "assets/svg/leftArrow.svg";

const myDisCountBar = [Short1, Short2, Short3, Short4, Short5, Short6];

const DiscountBars = () => {
  const [index, setIndex] = useState(3);
  const turnSlideLeft = () => {
    if (index >= 4) {
      setIndex((prvIndex) => prvIndex - 1);
    } else {
    }
  };
  const turnSlideRight = () => {
    if (index <= 4) {
      setIndex((prvIndex) => prvIndex + 1);
    } else {
    }
  };
  return (
    <div className="discountBars">
      <div className="discountBars-title">
        <p className="discountBars-titleText">WOMEN'S SHORTS</p>
        <div className="discountBars-butttons">
          <button
            onClick={turnSlideLeft}
            className={`discountBars-button ${
              index <= 3 ? "btnNotAllowed" : null
            }`}
          >
            <LeftArrow className="discountBars-leftArrow" />
          </button>
          <button
            onClick={turnSlideRight}
            className={`discountBars-button ${
              index >= 5 ? "btnNotAllowed" : null
            }`}
          >
            <RightArrow className="discountBars-rightArrow" />
          </button>
        </div>
      </div>
      <div className="discountBars-list">
        {index <= 3 ? (
          <DiscountBar
            src={myDisCountBar[0]}
            caption="Blue Tie Dye Cycle Shorts"
            pastPrice="29.00"
            currentPrice="23.00"
            alt="Short1"
          />
        ) : null}
        {index <= 4 ? (
          <DiscountBar
            src={myDisCountBar[1]}
            caption="Blue Tie Dye Cycle Shorts"
            pastPrice="29.00"
            currentPrice="23.00"
            alt="Short2"
          />
        ) : null}
        <DiscountBar
          src={myDisCountBar[2]}
          caption="Blue Tie Dye Cycle Shorts"
          pastPrice="29.00"
          currentPrice="23.00"
          alt="Short3"
        />
        <DiscountBar
          src={myDisCountBar[3]}
          caption="Blue Tie Dye Cycle Shorts"
          pastPrice="29.00"
          currentPrice="23.00"
          alt="Short4"
        />
        {index >= 4 ? (
          <DiscountBar
            src={myDisCountBar[4]}
            caption="Blue Tie Dye Cycle Shorts"
            pastPrice="29.00"
            currentPrice="23.00"
            alt="Short5"
          />
        ) : null}
        {index >= 5 ? (
          <DiscountBar
            src={myDisCountBar[5]}
            caption="Blue Tie Dye Cycle Shorts"
            pastPrice="29.00"
            currentPrice="23.00"
            alt="Short6"
          />
        ) : null}
      </div>
    </div>
  );
};

export default DiscountBars;
