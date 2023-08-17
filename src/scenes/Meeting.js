import React, { useEffect } from "react";
import { TouchableOpacity, View, ImageBackground, Image, TextInput, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "../components/Icon/Icon";
import { useNavigation } from "@react-navigation/native";

const Meeting = () => {
  const navigation = useNavigation()
    
  return (
    <View style={styles.wrapper('white')}>
      <View style={styles.header('white')}>
        <Icon
            onPress={() => navigation.goBack()}
            height={24}
            width={24}
            resizeContain
            source={require("../assets/icons/back.png")}
        />
        <Text style={styles.title}>
            MEETING
        </Text>
        <Icon
            onPress={() => console.log("click")}
            height={24}
            width={24}
            resizeContain
            source={require("../assets/icons/kebab.png")}
        />
      </View>
      
      <ImageBackground source={require('../assets/images/background_3.png')} style={{position:'relative', marginTop: 0, width: '100%', height: '100%'}}>
        <View style={styles.hero}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 30}}>
                <View style={{flexDirection: 'column', width: '90%'}}>
                    <View style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.35)', 
                        width: 140, 
                        height: 60,
                        borderRadius: 10,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                    }}>
                        <Text style={{color: 'white', fontSize: 14, textAlign: 'center'}}>
                            00:20:21
                        </Text>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: '900', textAlign: 'center'}}>
                            Dr. Quinn L.
                        </Text>
                    </View>
                    <View style={{
                        marginTop: 20,
                        backgroundColor: 'rgba(255, 255, 255, 0.6)', 
                        height: '78%',
                        borderRadius: 10,
                        flexDirection: 'column',
                        // justifyContent: 'space-around',
                    }}>
                        <View style={{marginTop: 10, paddingHorizontal: 10, flexDirection: 'row'}}>
                            <Image source={require('../assets/icons/avatar.png')} style={{width: 40, height: 40}}/>
                            <View style={{padding: 10, flexDirection: 'column', width: '92%'}}>
                                <Text style={{fontSize: 14, color: '#000'}}>Jane P.</Text>
                                <Text style={{fontSize: 12, fontFamily: 'Poppins'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu. Ut tortor pretium viverra suspendisse. Egestas pretium aenean pharetra magna ac placerat. Mattis aliquam faucibus purus in massa. Risus in hendrerit gravida rutrum quisque non. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sed elementum tempus egestas sed sed risus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sit amet commodo </Text>
                            </View>
                        </View>
                        <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                            <Image source={require('../assets/icons/avatar.png')} style={{width: 40, height: 40}}/>
                            <View style={{padding: 10, flexDirection: 'column', width: '92%'}}>
                                <Text style={{fontSize: 14, color: '#000'}}>Jane P.</Text>
                                <Text style={{fontSize: 12, fontFamily: 'Poppins'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu. Ut tortor pretium viverra suspendisse. Egestas pretium aenean pharetra magna ac placerat. Mattis aliquam faucibus purus in massa. Risus in hendrerit gravida rutrum quisque non. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sed elementum tempus egestas sed sed risus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sit amet commodo </Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{
                      width: '92%', 
                      height: 50, 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginLeft: 14
                    }}>
                      <TextInput
                          placeholder="Type something"
                          style={styles.input}
                          placeholderTextColor={'#9796A1'}
                          // value={value}
                          // onChangeText={onChangeText}
                      />
                      <Image 
                        source={require('../assets/icons/send.png')} 
                        style={{
                          width: 40, 
                          height:40,
                          position: 'absolute',
                          bottom: 80, 
                          right: 0
                      }}/>
                    </View>
                </View>
                <View style={{marginBottom:150,  flexDirection: 'column', justifyContent: 'flex-end'}}>
                    <Image source={require('../assets/icons/heart_1.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                    <Image source={require('../assets/icons/heart_2.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                    <Image source={require('../assets/icons/heart_1.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                    <Image source={require('../assets/icons/heart_2.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                    <Image source={require('../assets/icons/heart_1.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                </View>
            </View>
        </View>
      </ImageBackground>
      
      <View style={styles.footer('white')}>
        <TouchableOpacity style={styles.iconContainer('white')}>
          <Icon
              height={54}
              width={54}
              resizeContain
              source={require("../assets/icons/video.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer('white')}>
          <Icon
              height={54}
              width={54}
              resizeContain
              source={require("../assets/icons/audio.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer('white')}>
          <Icon
              height={54}
              width={54}
              resizeContain
              source={require("../assets/icons/call.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer('white')}>
          <Icon
              height={54}
              width={54}
              resizeContain
              source={require("../assets/icons/raise.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer('white')}>
          <Icon
              height={54}
              width={54}
              resizeContain
              source={require("../assets/icons/react.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Meeting;

const styles = StyleSheet.create({
  wrapper: (color) => ({
      backgroundColor: color,
      height: "100%"
  }),
  header: (color) => ({
      backgroundColor: color,
      flexDirection: "row",
      height: 48,
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 12,
      paddingHorizontal: 16
  }),
  footer: (color) => ({
      backgroundColor: color,
      flexDirection: "row",
      height: 76,
      justifyContent: "space-between",
      paddingVertical: 0,
      // paddingHorizontal: 16,
      position: 'absolute',
      bottom: 10,
  }),
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    alignSelf: 'center',
    fontWeight: '700',
  },
  hero: {
      // paddingHorizontal: 16,
      flex: 1,
      // alignItems: "center",
      // backgroundColor: "#F7F7F7",
      // backgroundImage: require('../assets/images/background_3.png')
  },
  image: {
    flex: 1,
  //   justifyContent: 'end',
      // alignItems: 'flex-start',
      width: '90%',
      height: '120%',
  },
  iconContainer: (color) => ({
      height: 64,
      width: 64,
      borderRadius: 32,
      borderWidth: 1,
      backgroundColor: color,
      alignItems: "center",
      justifyContent: "center",
      borderColor: '#DEDEDE',
      marginLeft: 26, 
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
      borderColor: '#1C62D3',
  },
  mainCallParticipantName: {
      paddingVertical: 6,
      paddingHorizontal: 24,
      backgroundColor: 'rgba(0,0,0,0.5)',
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
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 20,
      alignSelf: "flex-start",
      position: "absolute",
      left: 10,
      bottom: 10
  },
  input: {
    marginLeft: Dimensions.get('window').width / 50,
    paddingVertical: Dimensions.get('window').height / 100,
    width: '86%',
    position: 'absolute',
    bottom: 80,
  },
});
