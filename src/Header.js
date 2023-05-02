import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./header.css";

function Header() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  function showMenu(e) {
    e.preventDefault();
    setSideBarOpen(true);
  }

  function hideMenu() {
    setSideBarOpen(false);
  }

  window.onscroll = () => {
    setIsDark(window.scrollY > 100 ? true : false);
  };

  return (
    <>
      <header className={isDark ? "dark" : ""}>
        <img src="images/logo.svg" alt="Logo" />

        <ul>
          <li>
            <a href="#"> Model S</a>
          </li>
          <li>
            <a href="#">Model E</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#" onClick={showMenu}>
              Menu
            </a>
          </li>
        </ul>
      </header>
      <ul className="sideBar" style={{ right: sideBarOpen ? 0 : "-250px" }}>
        <CloseIcon
          className="closeIcon"
          onClick={hideMenu}
          style={{ right: sideBarOpen ? "20px" : "-250px" }}
        />
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Test Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
