import {configureStore} from '@reduxjs/toolkit';
import userType from './slices/userType';

export const store = configureStore({
  reducer: {
    userType,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});
