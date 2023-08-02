import React from "react";
import { ActivityIndicator, ViewStyle } from "react-native";

import { ThemeColors } from "../../styles";
import { useTheme } from "../../hooks";

type LoaderProps = {
    size?: number;
    color?: ThemeColors | string;
    style?: ViewStyle;
};

const Loader: React.FC<LoaderProps> = (props) => {
    const { size = 15, color, style } = props;

    const { AppTheme } = useTheme();

    return <ActivityIndicator size={size} style={style} color={color || AppTheme.Alpha} />;
};

export default Loader;
