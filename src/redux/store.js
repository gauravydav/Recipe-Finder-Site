import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slice/RecipeSlice";
const store = configureStore({
  reducer: dataSlice,
});
export default store;
