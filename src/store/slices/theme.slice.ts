import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeTypes } from "../../constants";

type ThemeState = {
    themeType: ThemeTypes;
};

export const initialState: ThemeState = {
    themeType: ThemeTypes.Light
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeTypes>) => {
            state.themeType = action.payload;
        }
    }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
