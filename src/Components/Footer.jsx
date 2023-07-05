import React, { useContext } from "react";
import logoDH from "../Assets/imgs/DH.png";
import { THEME } from "../Assets/theme/theme";
import { ContextGlobal } from "../Components/utils/global.context";

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <main className={theme === THEME.darkMode ? "dark-home" : ""}>
      <footer>
        <p>Powered by</p>
        <img src={logoDH} alt='LogoDH' />
      </footer>
    </main>
  );
};

export default Footer;
