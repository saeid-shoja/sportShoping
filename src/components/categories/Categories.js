import React from "react";
import "./Categories.css";
import Category from "./Category";
import Summer from "assets/images/summer.png";
import Shoe from "assets/images/shoes.png";
import Lingerie from "assets/images/LINGERIE.png";
import Texedo from "assets/images/tuxedo.png";
import Boy from "assets/images/boy.png";
import Girl from "assets/images/girl.png";

const Categories = () => {
  return (
    <div className="categories">
      <Category
        src={Summer}
        caption="SUMMER"
        alt="SUMMER"
        styles="summer-blue"
      />
      <Category src={Shoe} caption="SHOE" alt="SHOE" styles="shoe-dark" />
      <Category
        src={Lingerie}
        caption="LINGERIE"
        alt="LINGERIE"
        styles="lingerie-red"
      />
      <Category
        src={Texedo}
        caption="TEXEDO"
        alt="TEXEDO"
        styles="texedo-yellow"
      />
      <Category src={Boy} caption="BOY" alt="BOY" styles="boy-black" />
      <Category src={Girl} caption="GIRL" alt="GIRL" styles="girl-green" />
    </div>
  );
};

export default Categories;
