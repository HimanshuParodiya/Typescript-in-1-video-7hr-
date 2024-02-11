import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./slices";

const store = configureStore({
  reducer: { root: rootSlice },
});

export default store;
