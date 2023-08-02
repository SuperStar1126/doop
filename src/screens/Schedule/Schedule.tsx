import { FlatList, View, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "../../hooks";
import styles from "./styles";
import { Calendar } from "../../components/Calendar";
import dayjs from "dayjs";
import { Text } from "../../components/Text";
import { ScheduleContainer } from "../../components/ScheduleContainer";
type ScheduleProps = {};
const Schedule: React.FC<ScheduleProps> = ({navigation}) => {
    const { AppTheme } = useTheme();
    const Data = [1, 2, 3, 4];
    const meetings = [
      {
        id: '1',
        mode: 'Online Meeting',
        time: '01:00 PM to 02:00 PM',
      },
      {
        id: '2',
        mode: 'Online Meeting',
        time: '01:00 PM to 02:00 PM',
      },
      {
        id: '3',
        mode: 'Online Meeting',
        time: '01:00 PM to 02:00 PM',
      },
      {
        id: '4',
        mode: 'Online Meeting',
        time: '01:00 PM to 02:00 PM',
      },
      {
        id: '5',
        mode: 'Online Meeting',
        time: '01:00 PM to 02:00 PM',
      },
    ];

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({headerShown: true});
    // }, [navigation]);


    return (
        <View style={styles.wrapper(AppTheme.Background)}>
            <Text style={{
                fontSize: 16,
                fontFamily: 'Poppins-SemiBold',
                color: '#000000',
                alignSelf: 'center',
                fontWeight: '700',
                }}>
                    CALENDAR
            </Text>
            <View style={styles.calendar(AppTheme.Gamma)}>
                <Calendar />
            </View>
            <View style={{marginHorizontal: 30, marginTop: 20}}>
                <Text style={styles.text}>September 14, 2023</Text>
            </View>
                <FlatList
                    data={meetings}
                    style={{marginHorizontal: 30}}
                    renderItem={({item, index}) => {
                        return (
                            <View
                                style={{
                                backgroundColor: '#D9D9D9',
                                borderRadius: 26,
                                marginBottom: 17,
                                }}>
                                <View
                                style={{
                                    width: 280,
                                    flexDirection: 'row',
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                    borderRadius: 20,
                                    backgroundColor: '#FFFFFF',
                                }}>
                                <View style={{width: 200}}>
                                    <Text style={styles.mode}>{item.mode}</Text>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <Text style={styles.teams}>Teams</Text>
                                </View>
                                <View
                                style={{
                                    flexDirection: 'row',
                                    width: 56,
                                    height: 21,
                                    justifyContent: 'space-between',
                                    marginVertical: 26,
                                    // alignItems: 'center',
                                    marginRight: 36,
                                    position: 'absolute',
                                    right: 5,
                                }}>
                                <Image source={require('../../assets/icons/phone.png')} style={{width: 24, height: 24}}/>
                                <Image source={require('../../assets/icons/bell.png')} style={{width: 24, height: 24, marginLeft: 20}}/>
                                </View>
                            </View>
                    );
                }}
                />
        </View>
    );
};
export default Schedule;
