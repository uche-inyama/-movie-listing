import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/movieSlice';


const GetMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getMovies())},[dispatch]);
  const movies = useSelector((state) => state.movies);

  if(movies.status === 'loading') {
    return (
      <div>loading...</div>
    )
  } else if (movies.status === 'success'){
    const { movies: { data } } = movies;
    return (
      <ul>
        {data.Search.map(movie => <li>{movie.Title}</li> )}
      </ul>
    )
  } else {
    return (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>
    )
  } 
}

export default GetMovies
