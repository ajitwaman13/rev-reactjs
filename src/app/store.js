import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import Userreducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    counterR: counterReducer,
    user: Userreducer,
  },
});
