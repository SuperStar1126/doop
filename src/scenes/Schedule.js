import { FlatList, View, Image, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Calendar from "../components/Calendar/Calendar";
import dayjs from "dayjs";

const Schedule = ({navigation}) => {
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

    return (
      <View style={styles.wrapper()}>
          <Text style={styles.title}>
                CALENDAR
          </Text>
          <View >
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
                        <Image source={require('../assets/icons/phone.png')} style={{width: 24, height: 24}}/>
                        <Image source={require('../assets/icons/bell.png')} style={{width: 24, height: 24, marginLeft: 20}}/>
                      </View>
                  </View>
              );
            }}
          />
          {/* </View> */}
      </View>
    );
};

export default Schedule;


const styles = StyleSheet.create({
  wrapper: (color) => ({
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
  calendar: (color) => ({
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
