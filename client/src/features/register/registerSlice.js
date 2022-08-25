import { createSlice } from "@reduxjs/toolkit";

const registerInitialState = {
  uniqueEmailState: true,
  uncorrectEmailState: true,
  uncorrectPasswordState: true,
  uncorrectConfirmPasswordState: true,
  uncorrectNameAndPatronymicState: true,
  uncorrectRegionState: true,
  uncorrectIndexState: true,
  uncorrectCityState: true,
  uncorrectAddressState: true,
  uncorrectCountryState: true,
};

export const RegisterSlice = createSlice({
  name: "register",
  initialState: registerInitialState,
  reducers: {
    // Почта должна быть уникальной
    uniqueEmail: (state, action) => {
      state.uniqueEmailState = action.payload;
    },
    // Почта должна быть с @, gmail.com, не содержать лишних символов и т.д.
    uncorrectEmail: (state, action) => {
      state.uncorrectEmailState = action.payload;
    },
    // Пароль должен содержать 4-20 символов
    uncorrectPassword: (state, action) => {
      state.uncorrectPasswordState = action.payload;
    },
    // Подтверждение пароля должно совпадать с паролем
    uncorrectConfirmPassword: (state, action) => {
      state.uncorrectConfirmPasswordState = action.payload;
    },
    // Выберите регион
    uncorrectRegion: (state, action) => {
      state.uncorrectRegionState = action.payload;
    },
    // Индекс должен содержать от 2 до 10 символов
    uncorrectIndex: (state, action) => {
      state.uncorrectIndexState = action.payload;
    },
    // Город должен быть от 2 до 128 символов!
    uncorrectCity: (state, action) => {
      state.uncorrectCityState = action.payload;
    },
    // Адрес должен быть от 3 до 128 символов!
    uncorrectAddress: (state, action) => {
      state.uncorrectAddressState = action.payload;
    },
    // "Укажите Имя Отчество!" если введено имя менее 3х символов и отчество менее 3х символов
    uncorrectNameAndPatronymic: (state, action) => {
      state.uncorrectNameAndPatronymicState = action.payload;
    },
    // "Укажите Имя Отчество!" если введено имя менее 3х символов и отчество менее 3х символов
    uncorrectCountry: (state, action) => {
      state.uncorrectCountryState = action.payload;
    },
  },
});

export const {
  uniqueEmail,
  uncorrectEmail,
  uncorrectAddress,
  uncorrectCity,
  uncorrectConfirmPassword,
  uncorrectIndex,
  uncorrectNameAndPatronymic,
  uncorrectPassword,
  uncorrectRegion,
  uncorrectCountry
} = RegisterSlice.actions;

export default RegisterSlice.reducer;
