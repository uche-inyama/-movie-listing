import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../Api'

export const getMovies = createAsyncThunk(
  'movies/getMovies', fetchMovies
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: {},
    status: null
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload
      state.status = 'success'
    },
    [getMovies.rejected]: (state, {payload}) => {
      state.status = 'failed'
    }
  }
});

export default moviesSlice.reducer;