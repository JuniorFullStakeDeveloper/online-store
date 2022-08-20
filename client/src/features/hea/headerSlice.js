import { createSlice } from "@reduxjs/toolkit";

const headerInitialState = {
  profileActive: false,
  errorss: 0,
};

export const headerSlice = createSlice({
  name: "header",
  initialState: headerInitialState,
  reducers: {
    // profile:
    profileActiveHeader: (state) => {
      state.profileActive = !state.profileActive;
    },
    // error:
    errorPlus: (state) => {
      state.errorss = state.errorss + 1;
      console.log(state.errorss);
    },
    errorMinus: (state) => {
      state.errorss = state.errorss - 1;
    },
  },
});

export const { profileActiveHeader, errorPlus, errorMinus } =
  headerSlice.actions;

export default headerSlice.reducer;
