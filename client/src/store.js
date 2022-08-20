import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './features/hea/headerSlice';
import registerReducer from './features/register/registerSlice';

  export const store = configureStore({
    reducer: {
      header: headerReducer,
      register: registerReducer,
    },
  })
