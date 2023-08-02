import React, { useEffect } from "react";
import { TouchableOpacity, View, ImageBackground, Image, TextInput } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from "../../hooks";
import styles from "./styles";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { Icon } from "../../components/Icon";
import { ThemeColors } from "../../styles";
import { SafeAreaView } from "react-native-safe-area-context";
// import MeetingScreen from "../MeetingScreen/MeetingScreen";

type MeetingProps = {};
const Meeting: React.FC<MeetingProps> = ({navigation}) => {
    const { AppTheme } = useTheme();
    useEffect(() => {
        // navigation.navigate('MeetingScreen')
    })
    return (
        // <></>
        <View style={styles.wrapper(AppTheme.Gamma)}>
            <View style={styles.header(AppTheme.Gamma)}>
                <Icon
                    onPress={() => console.log("click")}
                    height={24}
                    width={24}
                    resizeContain
                    source={require("../../assets/icons/back.png")}
                />
                <Text color={AppTheme.Alpha} semiBold centered size={16}>
                    MEETING
                </Text>
                <Icon
                    onPress={() => console.log("click")}
                    height={24}
                    width={24}
                    resizeContain
                    source={require("../../assets/icons/kebab.png")}
                />
            </View>
            
            <ImageBackground source={require('../../assets/images/background_3.png')} style={{position:'relative', marginTop: 0, width: '100%', height: '100%'}}>
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
                                <Text style={{color: 'white', fontSize: 14}} centered>
                                    00:20:21
                                </Text>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: '900'}} centered>
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
                                    <Image source={require('../../assets/icons/avatar.png')} style={{width: 40, height: 40}}/>
                                    <View style={{padding: 10, flexDirection: 'column', width: '92%'}}>
                                        <Text>Jane P.</Text>
                                        <Text style={{fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu. Ut tortor pretium viverra suspendisse. Egestas pretium aenean pharetra magna ac placerat. Mattis aliquam faucibus purus in massa. Risus in hendrerit gravida rutrum quisque non. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sed elementum tempus egestas sed sed risus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sit amet commodo </Text>
                                    </View>
                                </View>
                                <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                                    <Image source={require('../../assets/icons/avatar.png')} style={{width: 40, height: 40}}/>
                                    <View style={{padding: 10, flexDirection: 'column', width: '92%'}}>
                                        <Text style={{fontSize: 14}}>Jane P.</Text>
                                        <Text style={{fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu. Ut tortor pretium viverra suspendisse. Egestas pretium aenean pharetra magna ac placerat. Mattis aliquam faucibus purus in massa. Risus in hendrerit gravida rutrum quisque non. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Sed elementum tempus egestas sed sed risus. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sit amet commodo </Text>
                                    </View>
                                </View>
                            </View>
                            
                            <View style={{width: '92%', height: 50, flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
                                <TextInput
                                    placeholder="Type something"
                                    style={styles.input}
                                    placeholderTextColor={'#9796A1'}
                                    // value={value}
                                    // onChangeText={onChangeText}
                                />
                                <Image source={require('../../assets/icons/send.png')} style={{width: 40, height:40}}/>
                            </View>
                        </View>
                        <View style={{marginBottom:40,  flexDirection: 'column', justifyContent: 'flex-end'}}>
                            <Image source={require('../../assets/icons/heart_1.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                            <Image source={require('../../assets/icons/heart_2.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                            <Image source={require('../../assets/icons/heart_1.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                            <Image source={require('../../assets/icons/heart_2.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                            <Image source={require('../../assets/icons/heart_1.png')} style={{marginTop: 20, width: 20, height: 20}}/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.footer(AppTheme.Gamma)}>
                <TouchableOpacity style={styles.iconContainer(AppTheme.Gamma)}>
                    <Icon
                        height={54}
                        width={54}
                        resizeContain
                        source={require("../../assets/icons/video.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer(AppTheme.Gamma)}>
                    <Icon
                        height={54}
                        width={54}
                        resizeContain
                        source={require("../../assets/icons/audio.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer(AppTheme.Gamma)}>
                    <Icon
                        height={54}
                        width={54}
                        resizeContain
                        source={require("../../assets/icons/call.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer(AppTheme.Gamma)}>
                    <Icon
                        height={54}
                        width={54}
                        resizeContain
                        source={require("../../assets/icons/raise.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer(AppTheme.Gamma)}>
                    <Icon
                        height={54}
                        width={54}
                        resizeContain
                        source={require("../../assets/icons/react.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Meeting;
