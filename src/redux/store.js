import { configureStore } from '@reduxjs/toolkit';
import moviesReducer  from './movieSlice';
import showsReducer from './showsSlice';
import MovieDetailReducer from './movieDetailSlice'
import SignUpReducer from './registrationFormSlice'
import SessionsReducer from './sessionsSlice'

export default configureStore({
  reducer: {
    movies: moviesReducer,
    shows: showsReducer,
    movieDetail: MovieDetailReducer,
    SignUpData: SignUpReducer,
    sessionsData: SessionsReducer
  }
})