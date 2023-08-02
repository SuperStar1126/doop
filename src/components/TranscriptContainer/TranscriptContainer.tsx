import { Image, StyleSheet, View } from "react-native";
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
                <Text weight="500" size={12} color={AppTheme.Alpha}>
                    September 14, 2023
                </Text>
            </View>
            
            <View>
            {/* <View style={styles.meetingContainer(isActive ? ThemeColors.Blue : AppTheme.Gamma)}> */}
                <View style={{
                            borderRadius: 16,
                            // overflow: "hidden",
                            // marginHorizontal: 8,
                            // height: 270,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1
                            },
                            shadowOpacity: 0.18,
                            shadowRadius: 1.0,
                            elevation: 1,
                            width: '50%',
                            paddingHorizontal: 20,
                            paddingVertical: 6,
                            flexDirection: "row",
                            justifyContent: 'space-between',
                        }}>
                    <View>
                        <Text
                            weight="500"
                            size={16}
                            // style={styles.textContainer(isActive ? AppTheme.Gamma : ThemeColors.LightGray)}
                            color="#293041"
                        >
                            Online Meeting
                        </Text>
                        <Text
                            weight="400"
                            size={12}
                            style={{ paddingTop: 6 }}
                            color="#1D1D20"
                        >
                            01.00 PM - 02.00 PM
                        </Text>
                    </View>
                    <View style={{flexDirection: "column", alignItems: 'center', justifyContent: 'center'}}>
                        <Text
                            weight="500"
                            size={12}
                            // style={styles.textContainer(isActive ? AppTheme.Gamma : ThemeColors.LightGray)}
                            // color={isActive ? AppTheme.Gamma : AppTheme.Alpha}
                            color="#545454"
                        >
                            Teams
                        </Text>
                    </View>
                </View>
                <View style={{width: 30, backgroundColor:'#D9D9D9', position: 'absolute'}}>
                    <Image source={require('../../assets/icons/open.png')} style={{width: 20, height: 20}}/>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create<any>({
    wrapper: {
        paddingHorizontal: 10,
        flexDirection: "column",
        // alignItems: "center",
        // justifyContent: "space-between",
        // marginVertical: 10
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
