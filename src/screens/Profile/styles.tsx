import { StyleSheet } from "react-native";
import { ThemeColors } from "../../styles";

const styles = StyleSheet.create<any>({
    wrapper: (color: string) => ({
        backgroundColor: color,
        height: "100%"
    }),

    title: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        alignSelf: 'center',
        fontWeight: '700',
      },
});

export default styles;
