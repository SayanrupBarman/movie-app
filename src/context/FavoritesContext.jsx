import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (movie) => {
    setFavorites((prev) =>
      prev.find((m) => m.imdbID === movie.imdbID)
        ? prev
        : [...prev, movie]
    );
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((m) => m.imdbID !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
