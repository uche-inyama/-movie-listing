import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovieDetail } from '../Api/index';

export const getMovieDetail = createAsyncThunk(
  'movies/getDetail', fetchMovieDetail
)

const MovieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState: {
    movie: {},
    status: null
  },
  extraReducers: {
    [getMovieDetail.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getMovieDetail.fulfilled]: (state, { payload }) => {
      state.movie = payload
      state.status = 'success'
    },
    [getMovieDetail.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
});

export default MovieDetailSlice.reducer