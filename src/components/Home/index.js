import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/movieSlice';
import { getShows } from '../../redux/showsSlice';

const GetMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getMovies())
    dispatch(getShows())
  },[dispatch]);

  const movies = useSelector((state) => state.movies);
  const series = useSelector(state => state.shows);

  if(movies.status === 'loading' || series.status === 'loading') {
    return (
      <div>loading...</div>
    )
  } else if (movies.status === 'success' && series.status === 'success'){
    const { movies: { data } } = movies;
    const { shows } = series;

    return (
      <>
        <div>
          <h3>Movies</h3>
          <ul>
            {data.Search.map(movie => <li key={movie.imdbID}>
              <Link to={`movies/${movie.imdbID}`}>{movie.Title}</Link>
              </li> )}
          </ul>
        </div>
        <div>
          <h3>Series</h3>
          <ul>
            {shows.Search.map(show => <li key={show.imdbID}>
              <Link to={`movies/${show.imdbID}`}>{show.Title}</Link>
              </li> )}
          </ul>
        </div>
      </>
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
