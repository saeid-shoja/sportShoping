import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Basket } from "../../assets/svg/shopping_basket.svg";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Person } from "../../assets/svg/person_profile.svg";
import { ReactComponent as BlackFRI } from "../../assets/svg/BlackFRI.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-links">
          <BlackFRI className="main-icon" />
          <div className="header-link-list">
            <ul>
              <li>
                <Link to="/" className="header-link">
                  TUXEDO
                </Link>
              </li>
              <li>
                <Link to="/" className="header-link">
                  LINGERIE
                </Link>
              </li>
              <li>
                <Link to="/" className="header-link">
                  SUMMER SHOP
                </Link>
              </li>
              <li>
                <Link to="/" className="header-link">
                  BRANDS
                </Link>
              </li>
              <li>
                <Link to="/" className="header-link sale">
                  SALE
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-icons">
          <Link to="/">
            <Search className="header-icon" />
          </Link>
          <Link to="/">
            <Basket className="header-icon" />
          </Link>
          <Link to="/">
            <Person className="header-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
