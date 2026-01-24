// // // // import { useEffect, useState } from "react";
// // // // import SearchBar from "../components/SearchBar";
// // // // import MovieCard from "../components/MovieCard";
// // // // import Pagination from "../components/Pagination";
// // // // import Filter from "../components/Filter";
// // // // import { searchMovies } from "../services/omdbApi";


// // // // const Home = () => {
// // // // const [query, setQuery] = useState("avengers");
// // // // const [movies, setMovies] = useState([]);
// // // // const [page, setPage] = useState(1);
// // // // const [type, setType] = useState("");
// // // // const [error, setError] = useState("");


// // // // useEffect(() => {
// // // // searchMovies(query, page, type).then(data => {
// // // // if (data.Response === "False") {
// // // // setError(data.Error);
// // // // setMovies([]);
// // // // } else {
// // // // setMovies(data.Search);
// // // // setError("");
// // // // }
// // // // });
// // // // }, [query, page, type]);


// // // // return (
// // // // <div className="p-6">
// // // // <SearchBar setQuery={setQuery} />
// // // // <Filter setType={setType} />
// // // // {error && <p className="text-red-500">{error}</p>}
// // // // <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
// // // // {movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)}
// // // // </div>
// // // // <Pagination page={page} setPage={setPage} />
// // // // </div>
// // // // );
// // // // };
// // // // export default Home;

// // // // import { useEffect, useState } from "react";
// // // // import Navbar from "../components/Navbar";
// // // // import MovieCard from "../components/MovieCard";
// // // // import Pagination from "../components/Pagination";
// // // // import Filter from "../components/Filter";
// // // // import { searchMovies } from "../services/omdbApi";

// // // // const Home = () => {
// // // //   const [query, setQuery] = useState("avengers");
// // // //   const [movies, setMovies] = useState([]);
// // // //   const [page, setPage] = useState(1);
// // // //   const [type, setType] = useState("");
// // // //   const [error, setError] = useState("");

// // // //   useEffect(() => {
// // // //     searchMovies(query, page, type).then((data) => {
// // // //       if (data.Response === "False") {
// // // //         setError(data.Error);
// // // //         setMovies([]);
// // // //       } else {
// // // //         setMovies(data.Search);
// // // //         setError("");
// // // //       }
// // // //     });
// // // //   }, [query, page, type]);

// // // //   return (
// // // //     <div className="min-h-screen bg-black/87 text-white">
// // // //       <Navbar setQuery={setQuery} />

// // // //       <div className="pt-28 px-8 pb-10">
// // // //         <div className="m-2">
     
// // // //           <p className="text-4xl font-bold text-white-600 mt-3">
// // // //         Movies
// // // //       </p>

// // // //       <p className="text-m text-gray-400 mt-2 max-w-xl mt-3">
// // // //         Explore the most popular movies people are watching right now.
// // // //       </p>

// // // //       <p className="text-m text-gray-300 mt-2 max-w-2xl mb-10 mt-3">
// // // //         Movies move us like nothing else can, whether they’re scary, funny,
// // // //         dramatic, romantic or anywhere in-between. So many titles, so much
// // // //         to experience.
// // // //       </p>
// // // //       </div>
// // // //         <div className="mb-6">
// // // //   <div className="flex justify-between items-start">
// // // //  <h2 className="text-2xl font-bold mb-10 m-3">Trending Now</h2>
// //  {query && (
// //   <p className="text-sm text-gray-400 mb-4">
// //     Showing results for <span className="text-white font-semibold">{query}</span>
// //   </p>
// // )}
    
          
// // // //           <Filter setType={setType} />
// // // //         </div>

// // // //         {error && (
// // // //           <p className="text-red-500 text-center mb-4">{error}</p>
// // // //         )}

// // // //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
// // // //           {movies.map((movie) => (
// // // //             <MovieCard key={movie.imdbID} movie={movie} />
// // // //           ))}
// // // //         </div>

// // // //         <Pagination page={page} setPage={setPage} />
// // // //       </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // export default Home;

// // import { useEffect, useState } from "react";
// // import Navbar from "../components/Navbar";
// // import MovieCard from "../components/MovieCard";
// // import Pagination from "../components/Pagination";
// // import Filter from "../components/Filter";
// // import { searchMovies } from "../services/omdbApi";

// // const Home = () => {
// //   const [query, setQuery] = useState("avengers");
// //   const [movies, setMovies] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [type, setType] = useState("");
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     searchMovies(query, page, type).then((data) => {
// //       if (data.Response === "False") {
// //         setError(data.Error);
// //         setMovies([]);
// //       } else {
// //         setMovies(data.Search);
// //         setError("");
// //       }
// //     });
// //   }, [query, page, type]);

// //   return (
// //     <div className="min-h-screen bg-black text-white">
// //       <Navbar
// //         setQuery={(q) => {
// //           setQuery(q);
// //           setPage(1);
// //         }}
// //       />

// //       <div className="pt-28 px-8 pb-16">
// //         <div className="mb-6 flex justify-between items-start">
// //           <div>
// //             <h2 className="text-2xl font-bold">Trending Now</h2>
// //             <p className="text-sm text-gray-400 mt-1">
// //               Explore popular movies right now
// //             </p>
// //           </div>
// //           <Filter setType={setType} />
// //         </div>

// //         {error && (
// //           <p className="text-red-500 text-center mb-6">{error}</p>
// //         )}

// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
// //           {movies.map((movie) => (
// //             <MovieCard key={movie.imdbID} movie={movie} />
// //           ))}
// //         </div>

// //         <Pagination page={page} setPage={setPage} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import MovieCard from "../components/MovieCard";
// import Pagination from "../components/Pagination";
// import Filter from "../components/Filter";
// import { searchMovies } from "../services/omdbApi";

// const Home = () => {
//   const [query, setQuery] = useState("avengers");
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [type, setType] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // ✅ STOP API call for short search
//     if (query.trim().length < 3) {
//       setMovies([]);
//       setError("");
//       return;
//     }

//     searchMovies(query, page, type).then((data) => {
//       if (data.Response === "False") {
//         setError(data.Error);
//         setMovies([]);
//       } else {
//         setMovies(data.Search);
//         setError("");
//       }
//     });
//   }, [query, page, type]);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar
//         setQuery={(q) => {
//           setQuery(q);
//           setPage(1); // ✅ reset page on new search
//         }}
//       />

//       <div className="pt-28 px-8 pb-16">
//         <div className="mb-6 flex justify-between items-start">
//           <div>
//             <h2 className="text-2xl font-bold">Trending Now</h2>
//             {query && (
//   <p className="text-sm text-gray-400 mb-4">
//     Showing results for <span className="text-white font-semibold">{query}</span>
//   </p>
// )}

//             <p className="text-sm text-gray-400 mt-1">
//               Explore popular movies right now
//             </p>
//           </div>
//           <Filter setType={setType} />
//         </div>

//         {error && (
//           <p className="text-yellow-400 text-center mb-6">
//             🔍 Please refine your search (use more characters)
//           </p>
//         )}

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//           {movies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>

//         <Pagination page={page} setPage={setPage} />
//       </div>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Filter from "../components/Filter";
import { searchMovies } from "../services/omdbApi";
function Home(){
// const Home = () => {
const [query, setQuery] = useState("avengers");
const [movies, setMovies] = useState([]);
const [page, setPage] = useState(1);
const [type, setType] = useState("");
const [error, setError] = useState("");

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

  return (
     <div className="min-h-screen bg-black/87 text-white">
   
      <Navbar setQuery={setQuery} />

       <div className="pt-28 px-8 pb-10">
        <div className="m-2">
     
           <p className="text-6xl font-bold text-white-600 mt-3">
         Movies
      </p>

      <p className="text-m text-gray-400 mt-2 max-w-xl mt-3">
         Explore the most popular movies people are watching right now.
      </p>

       <p className="text-m text-gray-300 mt-2 max-w-2xl mb-10 mt-3">
         Movies move us like nothing else can, whether they’re scary, funny,
         dramatic, romantic or anywhere in-between. So many titles, so much
         to experience.
       </p>
       </div>
         <div className="mb-6">
             <div className="flex justify-between items-start">
  <h2 className="text-2xl font-bold mb-10 m-3">Trending Now</h2>
 {query && (
  <p className="text-sm text-gray-400 mb-4">
     Showing results for <span className="text-white font-semibold">{query}</span>
   </p>
 )}
    
          
         <Filter setType={setType} />
         </div>

         {error && (
           <p className="text-red-500 text-center mb-4">{error}</p>
         )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
         {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
           ))}
         </div>
          
         
        <Pagination page={page} setPage={setPage} />
       </div>
      </div>
    </div>
   );
 };
 export default Home;