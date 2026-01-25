import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { searchMovies } from "../services/omdbApi";
import { FaPlus } from "react-icons/fa";
function Home() {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  ); // Persist favorites in localStorage

  // Fetch movies from API
  useEffect(() => {
    searchMovies(query, page, type).then((data) => {
      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search);
        setError("");
      }
    });
  }, [query, page, type]);

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add or remove favorite
  const toggleFavorite = (movie) => {
    const isFav = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="min-h-screen bg-black/87 text-white">
      {/* Navbar */}
      <Navbar setQuery={setQuery} />

      <div className="pt-28 px-8 pb-10">
        {/* Header: Movies + Favorites */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-6xl font-bold text-white">Movies</p>

          <Link
            to="/favorites"
            className="relative font-semibold hover:text-red-500 transition"
          >
             <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-semibold flex items-center gap-3 mb-8">
                                        <FaPlus className="text-lg" />
                                        <span>Favorites</span>
                                      </button>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-xs px-2 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>

        {/* Subheading */}
        <p className="text-m text-gray-400 max-w-xl mb-3">
          Explore the most popular movies people are watching right now.
        </p>

        <p className="text-m text-gray-300 max-w-2xl mb-10">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much
          to experience.
        </p>

        {/* Trending + Filter */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Trending Now</h2>
            {query && (
              <p className="text-sm text-gray-400">
                Showing results for{" "}
                <span className="text-white font-semibold">{query}</span>
              </p>
            )}
          </div>

          <Filter setType={setType} />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
         
          {movies.map((movie) => (
            <MovieCard
  movie={movie}
  isFavorite={favorites.some(f => f.imdbID === movie.imdbID)}
  toggleFavorite={() => toggleFavorite(movie)}
/>
  
))}



        </div>

        {/* Pagination */}
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default Home;

