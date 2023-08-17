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

const Splash = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('LoopCameraFeed')
            navigation.navigate('LoopCameraFeed');   // Navigate to HomeScreen after 3 seconds
        }, 1000);
        return () => clearTimeout(timer);  
    }, [navigation])
    

    return (
        <ImageBackground source={require('../../assets/images/background_2.png')} >
            <ImageBackground source={require('../../assets/images/background_1.png')} >
                <View style={styles.wrapper()}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
                            <Image source={require('../../assets/icons/doop.png')} style={{width: '50%', height:90}}/>
                            <Text style={styles.title}>
                                Lorem Ipsum
                            </Text>
                            <Text style={styles.content}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </Text>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        </ImageBackground>
    );
};

export default Splash;

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
        fontSize: 16,
        textAlign: 'center',
    },
    content: {
        marginTop: 30,
        fontSize: 16,
        width: '65%',
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

