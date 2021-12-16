import axios from 'axios';

export const fetchMovies = async (args) => {
  console.log(args)
  try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${args}&type=movie`);
    return res
  } catch (error) {
    console.log(error); 
  }
}

export const fetchShows = async (args) => {
  console.log(args)
  try {
    const res =  await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${args}&type=series`)
    return res.data
  } catch (error) {
    console.log(error);
  }
}

export const fetchMovieDetail = async (imdbID) => {
  try {
    const res =  await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}&plot=full`)
    return res.data
  } catch (error) {
    console.log(error);
  }
}