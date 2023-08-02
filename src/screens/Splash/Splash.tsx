import React, { useEffect, useRef, useState } from "react";
import {
    View,
    SafeAreaView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Image
} from "react-native";
import * as Yup from "yup";

import styles from "./styles";

import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { Form, FieldType, FormRefType } from "../../form";
import { useTheme } from "../../hooks";

import { APP_ROUTES } from "../../routes";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoopCameraFeed from "../LoopCameraFeed/LoopCameraFeed";

type FormDataType = {
    email: string;
    password: string;
};

const validationSchema = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter email"),
    password: Yup.string().required("Please enter password")
});

type SplashProps = {};


const Splash: React.FC<SplashProps> = ({navigation}) => {
    const { AppTheme } = useTheme();
    const formRef = useRef<FormRefType<FormDataType>>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmitForm = (data: FormDataType) => {};
    const onSubmit = () => formRef?.current?.handleSubmit(handleSubmitForm)();

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('LoopCameraFeed')
          navigation.navigate('LoopCameraFeed');   // Navigate to HomeScreen after 3 seconds
        }, 2000);
        return () => clearTimeout(timer);  
        
        // navigation.navigate('Logout')
    }, [navigation])
    

    return (
            // <View style={styles.wrapper(AppTheme.Background)}>
        <ImageBackground source={require('../../assets/images/background_2.png')} >
            <ImageBackground source={require('../../assets/images/background_1.png')} >
                <View style={styles.wrapper()}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
                            <Image source={require('../../assets/icons/doop.png')} style={{width: '50%', height:90}}/>
                            <Text topSpacing={0} centered size={16}>
                                Lorem Ipsum
                            </Text>
                            <Text topSpacing={40} centered size={16} style={{width: '65%'}}>
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
