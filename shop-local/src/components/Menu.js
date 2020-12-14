import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesome } from ".";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const [menu, setMenu] = useState(false);
  const [menuLinks, setMenuLinks] = useState("page-links hide");
  const [cursorEvents, setCursorEvents] = useState(
    "menu-wrapper cursor-ev-false"
  );
  const [openMenu, setOpenMenu] = useState("menu-buttons show");
  const [closeMenu, setCloseMenu] = useState("close-menu hide");

  const handleClick = () => {
    let menuState = menu;
    setMenu(!menu);
    menuState
      ? setMenuLinks("page-links show")
      : setMenuLinks("page-links hide");
    menuState
      ? setCursorEvents("menu-wrapper cursor-ev-true")
      : setCursorEvents("menu-wrapper cursor-ev-false");
    menuState
      ? setOpenMenu("menu-buttons hide")
      : setOpenMenu("menu-buttons show");
    menuState
      ? setCloseMenu("close-menu show")
      : setCloseMenu("close-menu hide");
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className={cursorEvents}>
      <div className={openMenu} onClick={handleClick}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
      <div className={closeMenu} onClick={handleClick}>
        <FontAwesome icon={faTimes} />
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
