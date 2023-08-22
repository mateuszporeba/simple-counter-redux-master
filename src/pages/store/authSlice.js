import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      console.log(state.isAuthenticated)
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer