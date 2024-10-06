import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "./LanguageRedux.jsx/Language";
import loginSlice from "./Enter";
const store = configureStore({
  reducer: {
    language: languageSlice,
    enter: loginSlice,
  },
});

export default store;
