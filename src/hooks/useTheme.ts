import { DarkTheme, LightTheme } from "../styles";

import { ThemeTypes } from "../constants";
import { useTypedSelector } from "./useTypedSelector";

const useTheme = () => {
    const themeType: ThemeTypes = useTypedSelector((state) => state.theme.themeType);

    const isDarkTheme: boolean = themeType === ThemeTypes.Dark;

    const AppTheme = isDarkTheme ? DarkTheme : LightTheme;
    
    return { isDarkTheme, AppTheme, themeType };
};

export { useTheme };
