

import { Link } from "react-router-dom";
function MovieCard({movie}){
// const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-zinc-800 rounded overflow-hidden hover:scale-120 transition">
        <img
          src={movie.Poster  !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="h-64 w-full object-cover"
        />
        <div className="p-2">
          <h3 className="text-sm font-semibold mt-2 mb-3">{movie.Title}</h3>
          <p className="text-xs text-gray-400 mb-3">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
