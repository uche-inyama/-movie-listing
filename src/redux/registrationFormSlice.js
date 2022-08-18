import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RegisterUser } from "../Api";

export const PostUser = createAsyncThunk('/users', RegisterUser);

const registrationSlice = createSlice({
  name: 'registerUsers',
  initialState: {
    user: [],
    status: null
  },
  extraReducers: {
    [PostUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [PostUser.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.status = 'success'
    },
    [PostUser.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export default registrationSlice.reducer