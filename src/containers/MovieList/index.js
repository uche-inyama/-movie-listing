import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/movieSlice';
import { getShows } from '../../redux/showsSlice';
import MovieCard from '../../components/MovieCard'

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
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h3>Movies</h3>
          <ul>
            <div className='movie-container'>
              {data.Search.map(movie => <MovieCard key={movie.imdbID} data={movie} /> )}
            </div>
          </ul>
        </div>
        <div className='show-wrapper'>
          <h3>Series</h3>
          <ul className='show-list'>
            <div className='show-container'>
              {shows.Search.map(show => <MovieCard key={show.imdbID} data={show}/>)}
            </div>
          </ul>
        </div>
      </div>
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
