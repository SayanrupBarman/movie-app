import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getMovieDetails } from "../services/omdbApi";

function MovieDetails() {
  const { id } = useParams(); // imdbID from route
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  // Fetch movie details
  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    }
    fetchMovie();
  }, [id]);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = favorites.some(
    (fav) => fav.imdbID === movie?.imdbID
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  if (loading) {
    return <p className="text-white text-center mt-20">Loading...</p>;
  }

  return (
    <div className="relative min-h-screen text-white">

      {/* 🔥 BLURRED POSTER BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center blur-xl scale-110"
        style={{
          backgroundImage:
            movie?.Poster && movie.Poster !== "N/A"
              ? `url(${movie.Poster})`
              : "none",
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/80" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <div className="pt-28 px-8 pb-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Poster */}
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
              alt={movie.Title}
              className="w-full md:w-1/3 rounded-xl shadow-2xl"
            />

            {/* Movie Info */}
            <div className="flex-1">
              <h1 className="text-5xl font-bold mb-4">{movie.Title}</h1>

              <p className="text-gray-300 mb-2">
                <b>Year:</b> {movie.Year}
              </p>
              <p className="text-gray-300 mb-2">
                <b>Genre:</b> {movie.Genre}
              </p>
              <p className="text-gray-300 mb-2">
                <b>Director:</b> {movie.Director}
              </p>
              <p className="text-gray-300 mb-2">
                <b>Cast:</b> {movie.Actors}
              </p>
              <p className="text-gray-300 mb-4">
                <b>Plot:</b> {movie.Plot}
              </p>

              {/* Ratings */}
              {movie.Ratings?.length > 0 && (
                <div className="mb-4">
                  <h2 className="font-semibold text-lg mb-2">Ratings</h2>
                  <ul className="list-disc list-inside text-gray-300">
                    {movie.Ratings.map((rating, index) => (
                      <li key={index}>
                        {rating.Source}: {rating.Value}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={toggleFavorite}
                className={`mt-4 px-5 py-2 rounded-lg font-semibold transition ${
                  isFavorite
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-700 hover:bg-gray-800"
                }`}
              >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>

              {/* Back */}
              <div className="mt-6">
                <Link to="/" className="text-blue-400 hover:underline">
                  ← Back to Movies
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
