// const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
// const BASE_URL = "https://www.omdbapi.com/";


// export const searchMovies = async (query, page, type) => {
// const res = await fetch(
// `${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
// );
// return res.json();
// };


// export const getMovieDetails = async (id) => {
// const res = await fetch(
// `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
// );
// return res.json();
// };

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchMovies = async (query, page = 1, type = "") => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}&type=${type}`
  );
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
  );
  return res.json();
};

