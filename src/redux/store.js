import { configureStore } from '@reduxjs/toolkit';
import moviesSlice  from './movieSlice';

export default configureStore({
  reducer: {
    movies: moviesSlice
  }
})