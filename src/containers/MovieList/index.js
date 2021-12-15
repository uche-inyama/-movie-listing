import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovies } from '../../redux/movieSlice';
import { getShows } from '../../redux/showsSlice';
import MovieCard from '../../components/MovieCard';
import StyledList from './styledMovieList';

const MovieList = () => {

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
      <StyledList>
        <div className='movie-list'>
          <h2>Movies</h2>
          <ul>
            <div className='movie-container'>
              {data.Search.map(movie => <MovieCard key={movie.imdbID} data={movie} /> )}
            </div>
          </ul>
        </div>
        <div className='show-list'>
          <h2>Series</h2>
          <ul>
            <div className='show-container'>
              {shows.Search.map(show => <MovieCard key={show.imdbID} data={show}/>)}
            </div>
          </ul>
        </div>
      </StyledList>
    )
  } else {
    return (
      <div className='movies-error'>
        error
        <h3>{movies.Error}</h3>
      </div>
    )
  } 
}

export default MovieList
