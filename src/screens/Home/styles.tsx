import { StyleSheet } from "react-native";
import { ThemeColors } from "../../styles";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%",
        paddingHorizontal: 16
    }),

    header: (color: string) => ({
        backgroundColor: color,
        flexDirection: "row",
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16
    }),
    hero: {
        paddingHorizontal: 16,
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F7F7F7"
    },
    mainVideoCard: {
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1
    },
    videoStatusContainer: {
        backgroundColor: "#BDFF5F",
        borderRadius: 20,
        paddingVertical: 4,
        alignSelf: "flex-start",
        paddingHorizontal: 8
    },
    logoContainer: {
        height: 43,
        width: 136,

        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center"
    },

    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    joinedMembersContainer: (color: string, index: number, backgroundColor: string) => ({
        position: "absolute",
        left: index * 15,
        borderColor: color,
        borderWidth: 1,
        borderRadius: 20,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        height: 30,
        backgroundColor: "#eee"
    }),

    tagsContainer: (color: string) => ({
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: color,
        borderRadius: 20
    }),
    joinBtn: (color: string) => ({
        padding: 10,
        borderRadius: 20,
        backgroundColor: color
    })
});

export default styles;
