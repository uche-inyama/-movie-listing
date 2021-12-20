import axios from 'axios';

export const fetchMovies = async (args) => {
  const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${args}&type=movie`);
  return res
}

export const fetchShows = async (args) => {
  const res =  await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${args}&type=series`)
  return res.data
}

export const fetchMovieDetail = async (imdbID) => {
  const res =  await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}&plot=full`)
  return res.data
}