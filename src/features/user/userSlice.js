import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isloginUser: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userData = action.payload;
      state.isloginUser = true;
    },
    logOut: (state, action) => {
      state.isloginUser = false;
    },
  },
});

// extract

export const { loginUser, logOut } = userSlice.actions;

export default userSlice.reducer;
