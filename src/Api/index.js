import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const res = await axios.get('http://www.omdbapi.com/?apikey=d8718f4b&s=harry&type=movie');
    return res
    // return res
  } catch (error) {
    console.log(error); 
  }
}