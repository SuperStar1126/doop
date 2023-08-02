import { StyleSheet, Dimensions } from "react-native";
import { ThemeColors } from "../../styles";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%"
    }),

    header: (color: string) => ({
        backgroundColor: color,
        flexDirection: "row",
        height: 48,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16
    }),
    footer: (color: string) => ({
        backgroundColor: color,
        flexDirection: "row",
        height: 76,
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 16
    }),
    hero: {
        // paddingHorizontal: 16,
        flex: 1,
        // alignItems: "center",
        // backgroundColor: "#F7F7F7",
        // backgroundImage: require('../../assets/images/background_3.png')
    },
    image: {
      flex: 1,
    //   justifyContent: 'end',
        // alignItems: 'flex-start',
        width: '90%',
        height: '120%',
    },
    iconContainer: (color: string) => ({
        height: 64,
        width: 64,
        borderRadius: 32,
        borderWidth: 1,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        borderColor: ThemeColors.LightGray
    }),
    mainCallParticipant: {
        marginTop: 14,
        width: 358,
        height: 388,
        position: "relative",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        borderWidth: 4,
        borderColor: ThemeColors.Blue
    },
    mainCallParticipantName: {
        paddingVertical: 6,
        paddingHorizontal: 24,
        backgroundColor: ThemeColors.BlackHalfOpacity,
        borderRadius: 20,
        alignSelf: "flex-start",
        position: "absolute",
        left: 10,
        bottom: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    otherCallParticipants: {
        width: 173,
        height: 182,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        position: "relative",
        marginTop: 10
    },
    otherCallParticipantsName: {
        paddingVertical: 2,
        paddingHorizontal: 12,
        backgroundColor: ThemeColors.BlackHalfOpacity,
        borderRadius: 20,
        alignSelf: "flex-start",
        position: "absolute",
        left: 10,
        bottom: 10
    },
    input: {
      marginLeft: Dimensions.get('window').width / 50,
      paddingVertical: Dimensions.get('window').height / 100,
      width: '86%'
    },
});

export default styles;
