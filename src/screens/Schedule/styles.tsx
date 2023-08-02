import { StyleSheet } from "react-native";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%"
    }),
    calendar: (color: string) => ({
        borderRadius: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1
    }),
    schedule: {
      width: 410,
      borderRadius: 16,
      alignSelf: 'center',
      marginTop: 38,
      height: 300,
    },
    text: {
      fontSize: 16,
      fontFamily: 'Plus Jakarta Sans',
      color: '#1E2022',
      alignSelf: 'center',
      fontWeight: '600',
      marginBottom: 20
    },
    list: {
      marginTop: 17,
      paddingHorizontal: 0,
    },
    time: {
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      color: '#1D1D20',
      fontWeight: '500',
      marginTop: 12,
    },
    mode: {
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: '#293041',
      fontWeight: '600',
    },
    teams: {
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      color: '#545454',
      fontWeight: '500',
      position: 'absolute',
      right: 10,
      bottom: 27,
    },
});

export default styles;
