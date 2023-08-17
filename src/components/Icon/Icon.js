import React from "react";
import {
    View,
    Image,
    StyleSheet,
    ImageSourcePropType,
    FlexStyle,
    ImageStyle,
    TouchableOpacity,
    GestureResponderEvent
} from "react-native";

// import { ThemeColors } from "../../styles";

// import { useTheme } from "../../hooks";

// type IconProps = {
//     width: number;
//     height: number;
//     color?: ThemeColors | string;
//     source: ImageSourcePropType;
//     containerStyles?: FlexStyle;
//     imageStyles?: ImageStyle;
//     onPress?: (event: GestureResponderEvent) => void;
//     resizeContain?: boolean;
// };

// type IconStyles = {
//     image: ImageStyle;
// };

const Icon = (props) => {
    const {
        width,
        height,
        source,
        color,
        containerStyles = {},
        imageStyles = {},
        onPress,
        resizeContain = true
    } = props;

    const isPressable = !!(onPress && typeof onPress === "function");

    const renderImage = () => (
        <Image
            source={source}
            style={[
                styles.image,
                resizeContain && { resizeMode: "contain" },
                { ...(color && { tintColor: color }), ...imageStyles }
            ]}
        />
    );

    if (isPressable) {
        return (
            <TouchableOpacity
                style={{ width, height, ...containerStyles }}
                onPress={onPress}
                activeOpacity={0.8}
            >
                {renderImage()}
            </TouchableOpacity>
        );
    }

    return <View style={{ width, height, ...containerStyles }}>{renderImage()}</View>;
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        flex: 1
    }
});

export default Icon;
