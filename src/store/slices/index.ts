import { combineReducers } from "@reduxjs/toolkit";

import themeSlice, { setTheme } from "./theme.slice";

export const rootReducer = combineReducers({
    theme: themeSlice
});

export { setTheme };
