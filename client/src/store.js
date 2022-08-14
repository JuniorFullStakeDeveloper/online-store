import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './features/hea/headerSlice';

  export const store = configureStore({
    reducer: {
      header: headerReducer,
    },
  })
