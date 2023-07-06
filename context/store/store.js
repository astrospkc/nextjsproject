import { configureStore } from "@reduxjs/toolkit";
import setTheme from "../../src/components/Theme/ThemeSlice";

const store = configureStore({
  reducer: {
    theme: setTheme,
  },
});

export default store;
