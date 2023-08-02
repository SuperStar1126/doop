import { StyleSheet, View } from "react-native";
import { Text } from "../Text";
import { useTheme } from "../../hooks";
import { ThemeColors } from "../../styles";

type ScheduleContainer = {
    isActive?: boolean;
};

const ScheduleContainer: React.FC<ScheduleContainer> = (props) => {
    const { isActive } = props;
    const { AppTheme } = useTheme();
    return (
        <View style={styles.wrapper}>
            <View>
                <Text
                    style={styles.dateContainer(isActive ? "#A6E054" : ThemeColors.Transparent)}
                    centered
                    color={isActive ? AppTheme.Gamma : AppTheme.Alpha}
                    weight="600"
                    size={24}
                >
                    14
                </Text>
                <Text weight="500" size={12} centered color={AppTheme.Alpha}>
                    Friday
                </Text>
            </View>

            <View style={styles.meetingContainer(isActive ? ThemeColors.Blue : AppTheme.Gamma)}>
                <Text
                    weight="500"
                    size={14}
                    style={styles.textContainer(isActive ? AppTheme.Gamma : ThemeColors.LightGray)}
                    color={isActive ? AppTheme.Gamma : AppTheme.Alpha}
                >
                    Gulu - Gulu Brief Projects
                </Text>
                <Text
                    weight="400"
                    size={12}
                    style={{ paddingTop: 10 }}
                    color={isActive ? AppTheme.Gamma : AppTheme.Alpha}
                >
                    01.00 PM - 02.00 PM
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create<any>({
    wrapper: {
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10
    },
    dateContainer: (color: string) => ({
        backgroundColor: color,
        borderRadius: 22,
        height: 44,
        width: 44,
        paddingVertical: 4,
        paddingHorizontal: 8
    }),
    meetingContainer: (color: string) => ({
        width: "80%",
        padding: 12,
        backgroundColor: color,
        overflow: "hidden",
        borderRadius: 20
    }),
    textContainer: (color: string) => ({
        borderBottomWidth: 1,
        borderBottomColor: color,
        paddingBottom: 10
    })
});
export default ScheduleContainer;
