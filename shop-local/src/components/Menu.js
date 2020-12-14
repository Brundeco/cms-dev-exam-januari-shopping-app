import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesome } from ".";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [menu, setMenu] = useState(false);
  const [menuLinks, setMenuLinks] = useState("page-links hide");
  const [cursorEvents, setCursorEvents] = useState("menu-wrapper cursor-ev-false");

  const handleClick = () => {
    let menuState = menu;
    setMenu(!menu);
    menuState
      ? setMenuLinks("page-links show")
      : setMenuLinks("page-links hide");
    menuState
      ? setCursorEvents("menu-wrapper cursor-ev-true")
      : setCursorEvents("menu-wrapper cursor-ev-false");
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className={cursorEvents}>
      <div className="menu-buttons" onClick={handleClick}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
      <div className={menuLinks}>
        <div>
          <Link to="/" onClick={handleClick}>
            <li>Home</li>
          </Link>
          <Link to="/login" onClick={handleClick}>
            <li>Login</li>
          </Link>
          <Link to="/login" onClick={handleClick}>
            <li>Profiel</li>
          </Link>
        </div>

        <div className="menu-center">
          <FontAwesome icon={faSearch} />
          <input
            type="search"
            className="menu-search-item"
            name="search"
            placeholder="Search item"
          />
        </div>
        <div className="menu-bottom">
          <FontAwesome icon={faFacebook} />
          <FontAwesome icon={faInstagram} />
        </div>
      </div>
    </div>
  );
};
