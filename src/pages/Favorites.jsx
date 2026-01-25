import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Remove favorite
  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen bg-black/87 text-white">
      <Navbar />
      <div className="pt-28 px-8 pb-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold cursor-pointer">Favorites</h1>
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to Movies
          </Link>
        </div>

        {favorites.length === 0 ? (
          <p className="text-gray-400 text-center mt-20">
            You have no favorite movies yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
           
            {favorites.map((movie) => (
  <MovieCard
    key={movie.imdbID}
    movie={movie}
    isFavorite={true}
    toggleFavorite={() => removeFavorite(movie.imdbID)}
    showRemoveOnHover={true} // shows ❌ on hover
  />
))}

          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;

