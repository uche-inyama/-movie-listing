import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { getMovies } from '../../redux/movieSlice';
import { getShows } from '../../redux/showsSlice';
import MovieCard from '../../components/MovieCard';
import StyledList from './styledMovieList';
import {settings} from '../../settings';

const MovieList = () => {

  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';
  useEffect(() => { 
    dispatch(getMovies(movieText));
    dispatch(getShows(showText));
  },[dispatch]);

  const movies = useSelector((state) => state.movies);
  const series = useSelector(state => state.shows);
  const { movies: { data } } = movies;
  const { shows } = series;

  return (
    <div className="fullList">
      {(movies.status === 'success' && series.status === 'success') ? (
        <>
          <StyledList>
            <div className='movie-list'>
              <h2 className="header">Movies</h2>
              <ul className="list">
                <div className='movie-container'>
                  <Slider {...settings }>{data.Search.map(movie => <MovieCard key={movie.imdbID} data={movie} /> )} </Slider>
                </div>
              </ul>
            </div>
            <div className='show-list'>
              <h2 className="header">Shows</h2>
              <ul className="list">
                <div className='show-container'>
                  <Slider {...settings }>{shows.Search.map(show => <MovieCard key={show.imdbID} data={show}/>)} </Slider>
                </div>
              </ul>
            </div>
          </StyledList>
        </>
      ) : (<div>loading...</div>)}
    </div>
  )
}

export default MovieList
