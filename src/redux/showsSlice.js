import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchShows } from '../Api';

export const getShows = createAsyncThunk(
  'shows/getShows', fetchShows
)

const showsSlice = createSlice({
  name: 'shows',
  initialState: {
    shows: [],
    status: null
  },
  extraReducers: {
    [getShows.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getShows.fulfilled]: (state, { payload }) => {
      state.shows = payload
      state.status =  'success'
    },
    [getShows.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
});

export default showsSlice.reducer;