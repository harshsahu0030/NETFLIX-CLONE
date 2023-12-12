import { configureStore } from "@reduxjs/toolkit";
import {
  isRegisteredUserReducer,
  userReducer,
} from "./reducers/userReducer.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    isRegistered: isRegisteredUserReducer,
  },
});

export default store;
