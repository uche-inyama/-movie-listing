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

export const RegisterUser = async (formData) => {
  console.log('Registering a user ...')
  const config = {
    method: 'POST',
    url: 'https://pure-retreat-18240.herokuapp.com/users',
    data: formData
  }
  const res = await axios(config)
  console.log(res)
  return res.data
}

export const loginUser = async (formData) => {
  const config = {
    method: 'POST',
    url: 'https://pure-retreat-18240.herokuapp.com/users/sign_in',
    data: formData
  }
  const res = await axios(config)
  return res.data
}

export const signOut = async () => {
  console.log('logging out...')
  const config = {
    method: 'DELETE', 
    url: 'https://pure-retreat-18240.herokuapp.com/users/sign_out',
  }
  await axios(config)
}