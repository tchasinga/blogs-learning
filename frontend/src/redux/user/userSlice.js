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

    // Adding updating user information

    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  singInStart,
  singInSuccess,
  singInFailure,
  userLogout,
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
