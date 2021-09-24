import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ src, styles, caption, alt }) => {
  return (
    <div>
      <figure className={`category-figur ${styles}`}>
        <img className="category-image" src={src} alt={alt} />
        <figcaption className="category-caption">
          <Link to="/">{caption}</Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default Category;
