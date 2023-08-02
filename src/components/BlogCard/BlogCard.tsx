import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { useTheme } from "../../hooks";

type CardProps = {};
const Card: React.FC<CardProps> = (props) => {
    const { AppTheme } = useTheme();
    return (
        <View style={{ flex: 1 }}>
            <Text
                color={AppTheme.Primary}
                style={{ fontWeight: "normal" }}
                topSpacing={20}
                size={14}
            >
                28th January,3:48pm
            </Text>

            <Text color={AppTheme.Alpha} style={{ fontWeight: "300" }} topSpacing={10} size={14}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
            <View style={styles.row}>
                <View style={styles.avatarContainer}>
                    <Icon
                        height={20}
                        resizeContain
                        source={require("../../assets/icons/avatar.png")}
                    />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text color={AppTheme.Alpha} style={{ fontWeight: "bold" }} size={12}>
                        Author Name
                    </Text>
                    <Text color={AppTheme.Alpha} style={{ fontWeight: "300" }} size={12}>
                        Position
                    </Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create<any>({
    avatarContainer: {
        backgroundColor: "#DDE6FF",
        padding: 10,
        width: 40,
        height: 40,
        borderRadius: 25
    },
    row: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center"
    }
});

export default Card;
