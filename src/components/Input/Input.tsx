import React, { useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    ImageSourcePropType,
    FlexStyle,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

import { FontFamily, ThemeColors } from "../../styles";

import { Text } from "../Text";
import { Icon } from "../Icon";
import { Loader } from "../Loader";
import { useTheme } from "../../hooks/useTheme";

type InputProps = {
    value: string;
    icon?: ImageSourcePropType;
    placeholder: string;
    label?: string;
    error?: string;
    containerStyles?: FlexStyle | Array<FlexStyle>;
    inputStyles?: FlexStyle | Array<FlexStyle>;
    wrapperStyles?: FlexStyle | Array<FlexStyle>;
    onChange?: (text: string) => void;
    secureText?: boolean;
    onBlur?: () => void;
    onFocus: () => void;
    onSelect: (val: string) => void;
    toggle: () => void;
    editable?: boolean;
    isLoading?: boolean;
    options?: Array<any>;
    isOpen: boolean;
};

const Input: React.FC<InputProps> = (props) => {
    const {
        value = "",
        icon = null,
        placeholder = "",
        label = "",
        error = "",
        containerStyles = {},
        inputStyles = {},
        wrapperStyles = {},
        onChange = () => {},
        secureText = false,
        onBlur = () => {},
        onFocus = () => {},
        editable = true,
        isLoading = false,
        options = [],
        onSelect = () => {},
        isOpen = false,
        toggle = () => {}
    } = props;

    const [showField, setShowField] = useState<boolean>(secureText);
    const { AppTheme } = useTheme();

    const renderLockIcon = () => {
        if (secureText) {
            return (
                <Icon
                    width={15}
                    height={14}
                    onPress={() => setShowField(!showField)}
                    source={
                        showField
                            ? require("../../assets/icons/eye-closed.png")
                            : require("../../assets/icons/eye-open.png")
                    }
                    color={AppTheme.SecondaryBeta}
                />
            );
        }
        return null;
    };

    return (
        <View style={[styles.wrapper, containerStyles]}>
            {!!label && (
                <Text regular size={14} bottomSpacing={10} letterSpacing={0.28} medium>
                    {label}
                </Text>
            )}

            <View style={[styles.container(AppTheme.Secondary, AppTheme.Secondary), wrapperStyles]}>
                {!!icon && (
                    <Icon
                        width={15}
                        height={15}
                        source={icon}
                        color={ThemeColors.Black}
                        containerStyles={styles.ml15}
                    />
                )}

                <TextInput
                    style={[styles.input(AppTheme.Alpha), inputStyles]}
                    placeholder={placeholder}
                    placeholderTextColor={AppTheme.SecondaryBeta}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={showField}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    editable={editable}
                />
                {isLoading ? <Loader /> : renderLockIcon()}
            </View>
            {Boolean(error) && (
                <Text color={ThemeColors.Red} regular size={11}>
                    {error}
                </Text>
            )}

            {isOpen && !!options?.length && (
                <React.Fragment>
                    <View
                        style={[styles.dropdown(AppTheme.Secondary), { top: "100%", left: "1%" }]}
                    >
                        {options?.map((item: any, index) => {
                            const { Name } = item;
                            return (
                                <View style={styles.content} key={"dropwown-" + index}>
                                    <TouchableOpacity onPress={() => onSelect(item)}>
                                        <Text bottomSpacing={9} size={13} color={AppTheme.Primary}>
                                            {Name}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </View>
                    <TouchableWithoutFeedback onPress={toggle}>
                        <View style={styles.overlay} />
                    </TouchableWithoutFeedback>
                </React.Fragment>
            )}
        </View>
    );
};

export default Input;

const styles = StyleSheet.create<any>({
    wrapper: {
        borderRadius: 2
    },
    container: (color: string) => ({
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 23,
        backgroundColor: color,
        borderRadius: 15
    }),
    input: (color: string) => ({
        fontSize: 16,
        flex: 1,
        height: 54,
        marginLeft: 19,
        color: color,
        fontFamily: FontFamily.Medium
    }),
    icon: {
        width: 14,
        height: 14,
        tintColor: ThemeColors.LightGray
    },
    ml15: {
        marginLeft: 15
    },
    dropdown: (color: string) => ({
        position: "absolute",
        backgroundColor: color,
        width: "100%",
        right: 0,
        borderRadius: 8,
        paddingTop: 12,
        paddingLeft: 5,
        paddingRight: 16,
        zIndex: 1
    })
});
