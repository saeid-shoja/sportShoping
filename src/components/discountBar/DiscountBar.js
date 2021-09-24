import React from "react";
import { Link } from "react-router-dom";
import "./DiscountBar.css";

const DiscountBar = ({
  src,
  caption,
  alt,
  pastPrice,
  currentPrice,
}) => {
  return (
    <div>
      <figure className='discountBar-figur'>
        <img className="discountBar-image" src={src} alt={alt} />
        <figcaption className="discountBar-caption">
          <Link to="/">{caption}</Link>
          <p className="discountBar-price">
            <del className="discountBar-pastPrice">{`$${pastPrice}`}</del>
            <span className="discountBar-currentPrice">{`$${currentPrice}`}</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default DiscountBar;
