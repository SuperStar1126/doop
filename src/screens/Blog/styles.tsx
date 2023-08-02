import { StyleSheet } from "react-native";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%",
        paddingHorizontal: 20
    }),

    avatarContainer: {
        backgroundColor: "#DDE6FF",
        padding: 10,
        width: 40,
        height: 40,
        borderRadius: 25
    }
});

export default styles;
