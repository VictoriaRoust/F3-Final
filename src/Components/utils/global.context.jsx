import { createContext, useContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";

export const ContextGlobal = createContext(undefined);

const themes = {
  dark: {
    theme: true,
    bgColor: "black",
    color: "white",
  },
  light: {
    theme: false,
    bgColor: "white",
    color: "black",
  },
};

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) || themes.light,
  favs: JSON.parse(localStorage.getItem("favoriteData")) || [],
  dentists: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DENTISTS":
      return { ...state, dentists: [...action.payload] };

    case "SET_THEME":
      localStorage.setItem("theme", JSON.stringify(action.payload));
      return { ...state, theme: action.payload };

    case "ADD_FAVORITE":
      const updatedData = state.favs ? [...state.favs, action.payload] : [action.payload];
      localStorage.setItem("favoriteData", JSON.stringify(updatedData));
      return { ...state, favs: updatedData };

    case "REMOVE_FAVORITE":
      const filteredData = state.favs ? state.favs.filter((item) => item.id !== action.payload) : [];
      localStorage.setItem("favoriteData", JSON.stringify(filteredData));
      return { ...state, favs: filteredData };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      dispatch({ type: "SET_DENTISTS", payload: res.data });
    });
  }, []);

  const setTheme = (theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  const addFavorite = (item) => {
    dispatch({ type: "ADD_FAVORITE", payload: item });
  };
  
  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  const contextValues = useMemo(() => ({
    setTheme,
    addFavorite,
    removeFavorite,
    state,
  }), [state]);

  return (
    <ContextGlobal.Provider value={contextValues}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);