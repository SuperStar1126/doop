import { StyleSheet } from "react-native";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%",
        paddingHorizontal: 20,
        justifyContent: "center"
    }),

    mb35: {
        marginBottom: 35
    },
    btn: {
        marginTop: 60
    },
    account: {
        alignSelf: "center",
        marginVertical: 48
    }
});

export default styles;
