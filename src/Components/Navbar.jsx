import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { THEME } from "../Assets/theme/theme";
import img from "../Assets/imgs/DH.png";

const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    const newTheme =
      theme === THEME.darkMode ? THEME.lightMode : THEME.darkMode;
      theme === THEME.darkMode
      ? document.querySelector("body").classList.remove("dark")
      : document.querySelector("body").classList.add("dark");
    setTheme(newTheme);
  };

  return (
    <>
      <nav id="custom-desktop" className={theme === THEME.darkMode ? "dark" : ""}>
        <img src={img} alt="logo" />

        <div className="custom-row">
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/favs"}>Favs</Link>
        </div>

        <div className="toggle-container">
          <label className="custom-toggle">
            <span className="icon-sun"></span>
            <span className="icon-moon"></span>
            <input onClick={toggleTheme} type="checkbox" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
