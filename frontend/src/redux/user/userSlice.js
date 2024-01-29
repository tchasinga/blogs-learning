import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        singInStart: (state) => {
        state.loading = true;
      },
      singInSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      },
  
      singInFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      userLogout: (state) => {
        state.currentUser = null;
        state.error = null;
      },
    }
})

export const {singInStart, singInSuccess, singInFailure, userLogout} = userSlice.actions

export default userSlice.reducer