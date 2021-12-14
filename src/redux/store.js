import { configureStore } from '@reduxjs/toolkit';
import moviesReducer  from './movieSlice';
import showsReducer from './showsSlice';
import MovieDetailReducer from './movieDetailSlice'

export default configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showsReducer,
    movieDetail: MovieDetailReducer
  }
})