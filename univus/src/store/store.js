import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appInitReducer from './slices/appInitSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appInit: appInitReducer,
  },
});
