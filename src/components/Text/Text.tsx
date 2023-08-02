import React from "react";
import { Text as RNText, StyleSheet, TextStyle, TextProps } from "react-native";

import { ThemeColors, FontFamily } from "../../styles";

import { useTheme } from "../../hooks/useTheme";

import { types as styleTypes } from "../../styles";

export type TextComponentProps = {
    regular?: boolean;
    medium?: boolean;
    mediumItalic?: boolean;
    bold?: boolean;
    boldItalic?: boolean;
    extraBold?: boolean;
    extraLight?: boolean;
    extraLightItalic?: boolean;
    extraBoldItalic?: boolean;
    italic?: boolean;
    semiBoldItalic?: boolean;
    semiBold?: boolean;
    light?: boolean;
    lightItalic?: boolean;
    lightExtra?: boolean;
    lightExtraItalic?: boolean;
    centered?: boolean;
    end?: boolean;
    right?: boolean;
    inverse?: boolean;
    underlined?: boolean;
    textProps?: TextProps;
    color?: ThemeColors | string;
    size?: number;
    weight?: styleTypes.FontWeights;
    leftSpacing?: number;
    rightSpacing?: number;
    topSpacing?: number;
    bottomSpacing?: number;
    letterSpacing?: number;
    style?: TextStyle;
    width?: number | undefined;
    children?: string | string[];
    opacity?: number;
    capitalize?: boolean;
};

const Text: React.FC<TextComponentProps> = (props) => {
    const {
        regular,
        medium,
        mediumItalic,
        bold,
        boldItalic,
        extraBold,
        extraLight,
        extraLightItalic,
        extraBoldItalic,
        italic,
        semiBoldItalic,
        semiBold,
        light,
        lightItalic,
        lightExtra,
        lightExtraItalic,

        centered,
        end,
        right,
        underlined,
        textProps,
        color,
        opacity,
        size,
        weight,
        capitalize,
        leftSpacing,
        rightSpacing,
        topSpacing,
        bottomSpacing,
        letterSpacing,
        children,
        width = undefined,
        style = {}
    } = props;
    const { AppTheme } = useTheme();

    return (
        <RNText
            style={[
                styles.default(color || AppTheme.Alpha),

                regular && { fontFamily: FontFamily.Regular },
                medium && { fontFamily: FontFamily.Medium },
                mediumItalic && { fontFamily: FontFamily.MediumItalic },
                bold && { fontFamily: FontFamily.Bold },
                boldItalic && { fontFamily: FontFamily.BoldItalic },
                extraBold && { fontFamily: FontFamily.ExtraBold },
                extraLight && { fontFamily: FontFamily.ExtraLight },
                extraLightItalic && { fontFamily: FontFamily.ExtraLightItalic },
                extraBoldItalic && { fontFamily: FontFamily.ExtraBoldItalic },
                italic && { fontFamily: FontFamily.Italic },
                semiBold && { fontFamily: FontFamily.SemiBold },
                semiBoldItalic && { fontFamily: FontFamily.SemiBoldItalic },
                light && { fontFamily: FontFamily.Light },
                lightItalic && { fontFamily: FontFamily.LightItalic },
                lightExtra && { fontFamily: FontFamily.ExtraLight },
                lightExtraItalic && { fontFamily: FontFamily.ExtraLightItalic },

                centered && styles.centered,
                end && styles.alignEnd,
                right && styles.right,
                underlined && styles.underlined,
                !!opacity && { opacity },
                !!size && { fontSize: size },
                !!weight && { fontWeight: weight },
                !!capitalize && styles.capitalize,
                !!leftSpacing && { marginLeft: leftSpacing },
                !!rightSpacing && { marginRight: rightSpacing },
                !!topSpacing && { marginTop: topSpacing },
                !!bottomSpacing && { marginBottom: bottomSpacing },
                !!letterSpacing && { letterSpacing: letterSpacing },
                !!width && { width: width },
                style
            ]}
            {...textProps}
        >
            {children}
        </RNText>
    );
};

const styles = StyleSheet.create<any>({
    default: (color: string) => ({
        fontSize: 16,
        fontFamily: FontFamily.Regular,
        color: color
    }),
    centered: {
        textAlign: "center"
    },
    alignEnd: {
        alignSelf: "flex-end"
    },
    right: {
        textAlign: "right"
    },
    underlined: {
        textDecorationLine: "underline"
    },
    capitalize: {
        textTransform: "capitalize"
    }
});

export default Text;
