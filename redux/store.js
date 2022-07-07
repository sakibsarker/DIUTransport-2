import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Reducers/user';
import busesReducer from "./Reducers/bus"

export const store = configureStore({
  reducer: {
    user:usersReducer,
    bus:busesReducer
  }
});