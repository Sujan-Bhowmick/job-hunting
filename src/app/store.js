import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "../features/job/jobSlice";
import filtersReducer from "../features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
   job: jobReducer,
   filters: filtersReducer,
  },
});
