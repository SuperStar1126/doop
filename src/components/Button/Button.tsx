import React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    GestureResponderEvent,
    FlexStyle,
    TextStyle
} from "react-native";

import { ThemeColors } from "../../styles";

import { Text } from "../Text";
import { Loader } from "../Loader";
import { useTheme } from "../../hooks";

type ButtonProps = {
    isLoading?: boolean;
    title?: string;
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    fontSize?: number;
    containerStyles?: FlexStyle | Array<FlexStyle>;
    primary?: boolean;
    textStyle?: TextStyle;
};

const Button: React.FC<ButtonProps> = (props) => {
    const {
        isLoading = false,
        title = "Submit",
        onPress = () => {},
        disabled = false,
        fontSize = 16,
        containerStyles = {},
        primary = true,
        textStyle = {}
    } = props;

    const { AppTheme } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.container(primary, AppTheme), containerStyles]}
            activeOpacity={0.8}
            onPress={onPress}
            disabled={isLoading || disabled}
        >
            {isLoading ? (
                <Loader size={30} />
            ) : (
                <Text
                    color={!primary ? AppTheme.Alpha : ThemeColors.White}
                    size={fontSize}
                    semiBold
                    letterSpacing={0.32}
                    style={textStyle}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create<any>({
    container: (bool: boolean, AppTheme: Record<string, any>) => ({
        height: 54,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        ...(bool && { backgroundColor: AppTheme.Primary }),
        ...(!bool && {
            backgroundColor: AppTheme.Secondary,
            borderWidth: 1,
            borderColor: AppTheme.Primary
        })
    })
});

export default Button;
