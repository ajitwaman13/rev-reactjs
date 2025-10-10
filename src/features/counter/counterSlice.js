import { createSlice } from "@reduxjs/toolkit";

// init val state this
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //  write the fn for management
    increment: (state, action) => {
      // we have access the state (similar as this )
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
