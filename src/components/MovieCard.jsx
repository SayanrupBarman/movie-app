import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";

function MovieCard({
  movie,
  isFavorite,
  toggleFavorite,
  showRemoveOnHover = false,
}) {
  return (
    <div
      className="relative group bg-gray-900 rounded overflow-hidden
                 transform transition duration-300 hover:scale-105"
    >
      {/* Poster */}
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          className="w-full h-64 object-cover"
        />
      </Link>

      {/* Info */}
      <div className="p-2">
        <h3 className="text-sm font-semibold">{movie.Title}</h3>
        <p className="text-xs text-gray-400">{movie.Year}</p>
      </div>


      {/* ⭐ FAVORITE BUTTON — SHOW ON HOVER FOR ALL CARDS */}
<button
  onClick={toggleFavorite}
  className="
    absolute bottom-2 right-2
    flex items-center gap-1
    bg-gray-600 text-white text-xs px-3 py-2 rounded
    opacity-0 group-hover:opacity-100
    transition duration-300
  "
>
  {isFavorite ? (
    <>
      <TiTick className="text-sm" />
      Remove
    </>
  ) : (
    <>
      <FaPlus className="text-sm" />
      Add
    </>
  )}
</button>

    </div>
  );
}

export default MovieCard;
