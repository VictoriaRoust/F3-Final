import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
import { THEME } from "../Assets/theme/theme";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  const favoriteDentists = JSON.parse(localStorage.getItem("favoriteData")) || [];

  return (
    <main className={theme === THEME.darkMode ? "dark" : ""}>
      <h1>Favorite Dentists</h1>
      <div className="cardList">
        {favoriteDentists.length > 0 ? (
          favoriteDentists.map((dentist) => (
            dentist && dentist.id ? (
              <Card
                dentist={dentist}
                key={dentist.id}
                isFavoritePage={true}
              />
            ) : null
          ))
        ) : (
          <p>You haven't added any dentists to your favorites.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
