import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../redux/movieDetailSlice';

const MovieDetail = () => {

  const { imdbID } = useParams();

  const dispatch = useDispatch();
  useEffect(() => { dispatch(getMovieDetail(imdbID))
  }, [dispatch, imdbID])

  const movieDetail = useSelector(state => state.movieDetail);
  const { movie, status } = movieDetail
  console.log(status, movie)
  if(status === 'loading') {
    return (
      <div>loading...</div>
    )
  }
  if (status === 'success') {
    return (
      <div>
        {movie.Title}
      </div>
    )
  }  
  return (
    <div>
      detail
    </div>
  )
}

export default MovieDetail
