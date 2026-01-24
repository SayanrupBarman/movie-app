

// // import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import { getMovieDetails } from "../services/omdbApi";

// // const MovieDetails = () => {
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);

// //   useEffect(() => {
// //     getMovieDetails(id).then(setMovie);
// //   }, [id]);

// //   if (!movie) return <p className="text-white p-10">Loading...</p>;

// //   return (
// //     <div className="relative min-h-screen bg-black text-white overflow-hidden">
// //       {/* Cinematic background */}
// //       <div
// //         className="absolute inset-0 bg-cover bg-center scale-110"
// //         style={{ backgroundImage: `url(${movie.Poster})` }}
// //       />
// //       <div className="absolute inset-0 backdrop-blur-2xl bg-black/70" />

// //       {/* CENTERED CONTENT */}
// //       <div className="relative z-10 flex justify-between ml-20 items-center min-h-screen">
// //         <div className="flex items-center gap-20">

// //           {/* BIG POSTER */}
// //           <div className="relative">
// //             <img
// //               src={movie.Poster}
// //               alt={movie.Title}
// //               className="w-90 rounded-3xl shadow-[0_35px_90px_rgba(0,0,0,0.85)]"
// //             />
// //             <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
// //           </div>

// //           {/* INFO CARD */}
// //           <div className="max-w-230 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
// //             <h1 className="text-4xl font-bold mb-5">
// //               {movie.Title}
// //             </h1>

// //             <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
// //               <span>{movie.Year}</span>
// //               <span>•</span>
// //               <span>{movie.Runtime}</span>
// //               <span>•</span>
// //               <span>{movie.Genre}</span>
// //             </div>

// //             <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm mb-6">
// //               ⭐ IMDb {movie.imdbRating}
// //             </div>

// //             <p className="text-gray-300 leading-relaxed mb-8">
// //               {movie.Plot}
// //             </p>
            




// //             <div className="flex gap-5">
// //               <button className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-xl font-semibold transition">
// //                 ▶ Play
// //               </button>
// //               <button className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl transition">
// //                 + Watchlist
// //               </button>
// //             </div>

// //             <div className="mt-7 text-sm text-gray-400">
// //               <p><span className="text-gray-500">Cast:</span> {movie.Actors}</p>
// //               <p><span className="text-gray-500">Director:</span> {movie.Director}</p>
// //             </div>
            




// //           </div>

       



// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieDetails;



// // import { useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { getMovieDetails } from "../services/omdbApi";

// // const MovieDetails = () => {
// //   const { id } = useParams();
// //   const [movie, setMovie] = useState(null);

// //   useEffect(() => {
// //     getMovieDetails(id).then(setMovie);
// //   }, [id]);

// //   if (!movie) return null;

// //   // use Poster as fallback backdrop
// //   const backdrop = movie.Poster !== "N/A"
// //     ? movie.Poster
// //     : "https://via.placeholder.com/1200x600";

// //   return (
// //     <div className="relative min-h-screen text-white overflow-hidden">

// //       {/* BACKDROP IMAGE */}
// //       <img
// //         src={backdrop}
// //         alt=""
// //         className="absolute inset-0 w-full h-full object-cover"
// //       />

// //       {/* LEFT DARK BLUR */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40 backdrop-blur-l" />

// //       {/* CONTENT */}
// //       <div className="relative z-10 max-w-7xl mx-auto px-12 pt-28 flex gap-10">

// //         {/* POSTER */}
// //         <img
// //           src={movie.Poster}
// //           alt={movie.Title}
// //           className="w-90 rounded-xl shadow-2xl"
// //         />

// //         {/* DETAILS */}
// //         <div className="max-w-2xl">
// //           <h1 className="text-4xl font-bold mb-3">
// //             {movie.Title}
// //           </h1>

// //           {/* META */}
// //           <div className="flex gap-4 text-sm text-gray-300 mb-4">
// //             <span>IMDb {movie.imdbRating}</span>
// //             <span>{movie.Year}</span>
// //             <span>{movie.Runtime}</span>
// //           </div>

// //           {/* GENRES */}
// //           <div className="flex gap-2 flex-wrap mb-5">
// //             {movie.Genre.split(", ").map((g) => (
// //               <span
// //                 key={g}
// //                 className="border border-white/40 px-3 py-1 rounded-full text-xs"
// //               >
// //                 {g}
// //               </span>
// //             ))}
// //           </div>

// //           {/* PLOT */}
// //           <p className="text-gray-300 leading-relaxed mb-8">
// //             {movie.Plot}
// //           </p>

// //           {/* BUTTONS */}
// //           <div className="flex gap-4">
// //             <button className="bg-white text-black px-8 py-3 rounded-md font-semibold">
// //               ▶ Watch
// //             </button>

// //             <button className="bg-zinc-700/80 px-6 py-3 rounded-md">
// //               + Watchlist
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MovieDetails;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/omdbApi";
 import { FaPlay } from "react-icons/fa";
 import { FaPlus } from "react-icons/fa";
 


// const MovieDetails = () => {
  function MovieDetails(){
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  



  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p className="text-white p-10">Loading...</p>;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* RIGHT SIDE BACKDROP IMAGE */}
      <img
        src={movie.Poster}
        alt=""
        className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-90"
      />

      {/* LEFT DARK GRADIENT + BLUR */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent backdrop-blur-m" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center px-20">
        <div className="flex gap-16 items-center max-w-6xl">

          {/* POSTER */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-80 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
          />

          {/* DETAILS */}
          <div className="max-w-xl">

            <h1 className="text-5xl font-bold mb-4">
              {movie.Title}
            </h1>

            {/* META */}
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              <span>{movie.Year}</span>
              <span>•</span>
              <span>{movie.Runtime}</span>
              <span>•</span>
              <span>{movie.Genre}</span>
            </div>

            {/* RATING */}
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1 rounded-full text-sm mb-6">
              ⭐ IMDb {movie.imdbRating}
            </div>

            {/* PLOT */}
            <p className="text-gray-300 leading-relaxed mb-8">
              {movie.Plot}
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-5 mb-8">
              {/* <button className="bg-red-600 hover:bg-red-700 px-10 py-3 rounded-xl font-semibold transition">
                ▶ Play
              </button> */}
            

<button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-semibold flex items-center gap-3">
  <FaPlay className="text-white text-lg" />
  <span>Play</span>
</button>




              <button className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl font-semibold flex items-center gap-3 transition">
                <FaPlus /><span> Watchlist</span>
              </button>
            </div>
            {/* <button
  onClick={() =>
    isFav ? removeFavorite(movie.imdbID) : addFavorite(movie)
  }
  className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl transition"
>
  {isFav ? "✓ Added" : " Watchlist"}
</button> */}


            {/* EXTRA INFO */}
            <div className="text-sm text-gray-400 space-y-2">
             <p>
                <span className="text-gray-500">Cast:</span> {movie.Actors}
              </p>
              <p>
                <span className="text-gray-500">Director:</span> {movie.Director}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  );
}

export default MovieDetails;


