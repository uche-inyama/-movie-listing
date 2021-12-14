import { configureStore } from '@reduxjs/toolkit';
import moviesReducer  from './movieSlice';
import showsReducer from './showsSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showsReducer
  }
})