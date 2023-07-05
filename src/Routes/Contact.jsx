import React, { useContext } from "react";
import Form from "../Components/Form";
import { THEME } from "../Assets/theme/theme";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <div className={theme === THEME.darkMode ? "dark contact" : ""}>
      <div className="contact-container">
        <h1 className="contact-title">Contact</h1>
        <div className="contact-info">
          <h2 className="contact-subtitle">Want to know more?</h2>
          <p className="contact-description">Send us your questions and we will contact you</p>
          <div className="contact-form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
