import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, signOut } from "../Api";

export const userSignIn = createAsyncThunk('/users_sign_in', loginUser);

export const userLogOut = createAsyncThunk('/users/sign_out', signOut)

const SessionsSlice = createSlice({
  name: "loginUser",
  initialState: {
    session: null,
    isAuthenticated: false,
    status: null
  },
  extraReducers: {
    [userSignIn.pending]: (state, action) => {
      state.status = 'loading'
    },
    [userSignIn.fulfilled]: (state, { payload }) => {
      console.log('signing in...')
      localStorage.setItem('token', payload.token)
      state.session = payload
      state.isAuthenticated = true
      state.status = 'success'
    },
    [userSignIn.rejected]: (state, action) => {
      state.status = 'failed'
    },
    [userLogOut.pending]: (state, action) => {
      state.status = 'loading'
    },
    [userLogOut.fulfilled]: (state, action) => {
      console.log('logging out...')
      localStorage.removeItem('token')
      state.status = 'success'
    },
    [userLogOut.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export default SessionsSlice.reducer;