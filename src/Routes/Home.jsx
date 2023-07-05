import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { THEME } from "../Assets/theme/theme"; 

const Home = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const dentists = state.dentists;

  return (
    <main className={theme === THEME.darkMode ? "dark-home" : ""}>
      <h1 id="title">Home</h1>
      <div className="cardList">
        {dentists.map((dentist, index) => (
          <Card dentist={dentist} key={index} isFavoritePage={false} />
        ))}
      </div>
    </main>
  );
};

export default Home;
