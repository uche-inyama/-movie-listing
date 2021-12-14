import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=harry&type=movie`);
    return res
  } catch (error) {
    console.log(error); 
  }
}

export const fetchShows = async () => {
  try {
    return await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=harry&type=series`)
  } catch (error) {
    console.log(error);
  }
}