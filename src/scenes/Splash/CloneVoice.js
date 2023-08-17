import React, { useEffect, useRef, useState } from "react";
import {
    View,
    SafeAreaView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Image,
    Text,
    StyleSheet,
} from "react-native";
import { Button } from '@rneui/themed';


const CloneVoice = ({navigation}) => {
    
    const handleNext = () => {
        console.log('SignIn')
        navigation.navigate('SignIn'); 
    }

    return (
        <ImageBackground source={require('../../assets/images/background_4.png')} >
            <ImageBackground source={require('../../assets/images/background_1.png')} >
                <View style={{
                    height: "100%",
                    paddingHorizontal: 20,
                }}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                            <View style={{borderRadius: 20, backgroundColor: '#DFDFDF', width: 380, height: 380}}></View>
                            <Text style={styles.title}>
                                Clone Your Voice
                            </Text>
                            <Text style={styles.content}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </Text>

                            <Image source={require('../../assets/icons/bullet_2.png')} resizeMode="contain" style={{width: 100, height: 5, marginTop: 30}}/>
                            
                            <Button
                                title="Next"
                                buttonStyle={{
                                    backgroundColor: '#000000',
                                    borderRadius: 20,
                                }}
                                containerStyle={{
                                    width: 300,
                                    marginHorizontal: 50,
                                    marginVertical: 80,
                                }}
                                onPress={handleNext}
                            />
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default CloneVoice;


const styles = StyleSheet.create({
    wrapper: (color) => ({
        // backgroundColor: color,
        height: "100%",
        paddingHorizontal: 20,
        justifyContent: "center",
        // backgroundImage: "../../../assets/images/background_1.png"
    }),
    title: {
        marginTop: 10,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '900',
        color: '#111',
    },
    content: {
        marginTop: 20,
        fontSize: 16,
        width: '85%',
        textAlign: 'center',
    },
    mb35: {
        marginBottom: 35
    },
    btn: {
        marginTop: 60
    },
    account: {
        alignSelf: "center",
        marginVertical: 48
    }
});

