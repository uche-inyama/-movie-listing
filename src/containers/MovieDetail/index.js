import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../redux/movieDetailSlice';
import StyledDetail from './styledDetail';

const MovieDetail = () => {
  const { imdbID } = useParams();
  
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getMovieDetail(imdbID))
  }, [dispatch, imdbID])

  const movieDetail = useSelector(state => state.movieDetail);
  const { movie, status } = movieDetail
 
  return (
    <StyledDetail>
      <div className="movie-section">
        <div className="section-left">
          <div className="movie-title"></div>
          <div className="movie-rating">
            <span>
              IMDB Rating <i className="fa fa-star"></i> : {movie.imdbRating}
            </span>
            <span>
              IMDB Votes <i className="fa fa-thumbs-up"></i> : {movie.imdbVotes}
            </span>
            <span>
              Runtime <i className="fa fa-film"></i> : {movie.Runtime}
            </span>
            <span>
              IMDB Rating <i className="fa fa-calender"></i> : {movie.Year}
            </span>
          </div>
          <div className="movie-plot">{movie.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{movie.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{movie.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{movie.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{movie.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{movie.Awards}</span>
            </div>
          </div>
          <div className="section-right">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      </div>
    </StyledDetail>
  )
}

export default MovieDetail
