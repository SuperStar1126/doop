import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SectionList,
  FlatList,
} from 'react-native';

export default function Transcript({navigation}) {
  let A = [
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
  ];
  let B = [
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
    {
      id: '6',
      mode: 'Online Meeting',
      time: '01:00 PM to 02:00 PM',
    },
  ];
  let C = [
    {
      id: '7',
      mode: 'Online Meeting',
      time: '01:00 PM to 02:00 PM',
    },
    {
      id: '8',
      mode: 'Online Meeting',
      time: '01:00 PM to 02:00 PM',
    },
    {
      id: '9',
      mode: 'Online Meeting',
      time: '01:00 PM to 02:00 PM',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text style={styles.title}>TRANSCRIPT</Text>
      <View
        style={{
          borderColor: '#E7DFDC',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 6,
          height: 44,
          width: 440,
          alignSelf: 'center',
          marginTop: 24,
        }}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={{
            height: 16,
            width: 16,
            marginVertical: 14,
            marginHorizontal: 14,
          }}
        />
        <TextInput
          style={styles.txtinput}
          placeholder="Search for names & keywords "
          placeholderTextColor="#E7DFDC"
        />
        <Image
          source={require('../../assets/icons/list.png')}
          style={{
            height: 17,
            width: 20,
            marginVertical: 14,
            marginHorizontal: 14,
          }}
        />
      </View>
      <View>
        <SectionList
          sections={[
            {title: 'September 14, 2023', data: A},
            {title: 'September 13, 2023', data: B},
            {title: 'September 12, 2023', data: C},
          ]}
          style={{marginHorizontal: 40}}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeaderStyle}>{section.title}</Text>
          )}
          renderItem={({item}) => (
            // <Text style={styles.sectionListItemStyle}></Text>

            <View style={styles.sectionListItemStyle}>
              <FlatList
                data={[    {
                  id: '1',
                  mode: 'Online Meeting',
                  time: '01:00 PM to 02:00 PM',
                },
              ]}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        backgroundColor: '#D9D9D9',
                        borderRadius: 16,
                        marginBottom: 17,
                      }}>
                      <View
                        style={{
                          width: 248,
                          flexDirection: 'row',
                          paddingVertical: 10,
                          paddingHorizontal: 15,
                          borderRadius: 16,
                          backgroundColor: '#FFFFFF',
                        // //   borderWidth: 1,
                        //   elevation: 3,
                        //   shadowColor: '#52006A',
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
                        marginVertical: 22,
                        // alignItems: 'center',
                        marginRight: 66,
                        position: 'absolute',
                        right: 5,
                      }}>
                      <Image source={require('../../assets/icons/open.png')} style={{width: 24, height: 24}}/>
                      <Image source={require('../../assets/icons/delete.png')} style={{width: 24, height: 24, marginLeft: 20}}/>
                      <Image source={require('../../assets/icons/save.png')} style={{width: 24, height: 24, marginLeft: 20}}/>
                    </View>
                    </View>
                  );
                }}
              />
          </View>



          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    alignSelf: 'center',
    fontWeight: '700',
  },
  txtinput: {
    alignSelf: 'center',
    height: 44,
    fontSize: 14,
    width: '80%',
    fontFamily: 'Poppins-Regular',
  },
  sectionHeaderStyle: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: '#1E2022',
    fontWeight: '700',
    marginTop: 20,
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
