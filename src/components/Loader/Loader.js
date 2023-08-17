import React from "react";
import { ActivityIndicator, ViewStyle } from "react-native";


const Loader = (props) => {
    const { size = 15, color, style } = props;
    return <ActivityIndicator size={size} style={style} color={color} />;
};

export default Loader;
