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
  reducers: {
    removeSelectedDetail: (state) => {
      state.movie = {};
    }
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

export const { removeSelectedDetail } = MovieDetailSlice.actions;

export default MovieDetailSlice.reducer