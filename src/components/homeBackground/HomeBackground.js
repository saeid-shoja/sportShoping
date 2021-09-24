import React, { useState } from "react";
import "./HomeBackground.css";
import { RiStarFill } from "react-icons/ri";
import { RiStarLine } from "react-icons/ri";
import background from "../../assets/images/home-pic.png";
import { SmallButton } from "components/buttons/Buttons";

const HomeBackground = () => {
  const [green, setGreen] = useState("onGreen");
  const [yellow, setYellow] = useState("");
  const [blue, setBlue] = useState("");

  const changeGreen = () => {
    setBlue("");
    setYellow("");
    setGreen("onGreen");
  };
  const changeYellow = () => {
    setBlue("");
    setGreen("");
    setYellow("onYellow");
  };
  const changeBlue = () => {
    setYellow("");
    setGreen("");
    setBlue("onBlue");
  };

  return (
    <div className="home-background">
      <img src={background} alt="background" className="home-background-pic" />
      <div className="home-checkOut">
        <p>Check</p>
        <br />
        <p>This</p>
        <br />
        <p>Out</p>
      </div>
      <div className="home-background-details">
        <p className="home-background-smp">New Arrival</p>
        <p>
          <strong>Elena Z12R</strong>
        </p>
        <div className="home-stars">
          <RiStarFill className="RiStarFill" />
          <RiStarFill className="RiStarFill" />
          <RiStarFill className="RiStarFill" />
          <RiStarFill className="RiStarFill" />
          <RiStarLine className="RiStarLine" />
        </div>
        <p className="home-background-smp">
          Perfect for teaming with your
          <br />
          favorite pair of shoes.
        </p>
        <p className="home-background-price">
          <strong>$450.</strong>
          <span className="home-background-price-zero">00</span>
        </p>
        <SmallButton>TRY IT</SmallButton>
      </div>
      <div className="home-changeColor">
        <button
          className={`changeColorBtn greenBtn ${green}`}
          onClick={changeGreen}
        ></button>
        <button
          className={`changeColorBtn yellowBtn ${yellow}`}
          onClick={changeYellow}
        ></button>
        <button
          className={`changeColorBtn blueBtn ${blue}`}
          onClick={changeBlue}
        ></button>
      </div>
      <p className="home-background-department">Department</p>
    </div>
  );
};

export default HomeBackground;
