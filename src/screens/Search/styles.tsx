import { StyleSheet } from "react-native";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%",
        paddingHorizontal: 20
    }),

    SearchWrapper: {
        marginTop: 20,
        backgroundColor: "#DDE6FF",
        alignItems: "center",
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    SearchContainer: (color: string) => ({
        flexDirection: "row",
        height: 50,
        width: "90%",
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: color
    }),
    InputContainer: {
        width: "80%"
    },
    SearchBtn: (color: string) => ({
        width: "20%",
        backgroundColor: color,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    })
});

export default styles;
