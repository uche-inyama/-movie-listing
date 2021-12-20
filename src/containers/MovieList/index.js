import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { getMovies } from '../../redux/movieSlice';
import MovieCard from '../../components/MovieCard';
import StyledList from './styledMovieList';
import {settings} from '../../settings';

const MovieList = () => {

  const dispatch = useDispatch();
  const movieText = 'Harry';
  useEffect(() => { 
    dispatch(getMovies(movieText));
  },[dispatch]);

  const movies = useSelector((state) => state.movies);
  const { movies: { data: moviesData } } = movies;

  if (movies.status === null || movies.status === 'loading') {
    return <div>loading...</div>;
  }

  if (moviesData.Response === 'False') {
    return <div style={{ color: '#fff'}}>{moviesData.Error}</div>;
  } 
  
  return (
    <div className="fullList">
      <>
        <StyledList>
          <div className='movie-list'>
            <h2 className="header">Movies</h2>
            <ul className="list">
              <div className='movie-container'>
                <Slider {...settings }>{moviesData.Search.map(
                  movie => <MovieCard key={movie.imdbID} data={movie} /> )} 
                </Slider>
              </div>
            </ul>
          </div>
        </StyledList>
      </>
    </div>
  )
}

export default MovieList
