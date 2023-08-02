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
// import { Button } from "../../components/Button";
import { Button } from '@rneui/themed';
import { Icon } from "../../components/Icon";
import { Form, FieldType, FormRefType } from "../../form";
import { useTheme } from "../../hooks";

import { APP_ROUTES } from "../../routes";

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import CloneVoice from "../CloneVoice/CloneVoice";

type FormDataType = {
    email: string;
    password: string;
};

const validationSchema = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter email"),
    password: Yup.string().required("Please enter password")
});

type LoopCameraFeedProps = {};


const LoopCameraFeed: React.FC<LoopCameraFeedProps> = ({navigation}) => {
    const { AppTheme } = useTheme();
    const formRef = useRef<FormRefType<FormDataType>>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmitForm = (data: FormDataType) => {};
    const onSubmit = () => formRef?.current?.handleSubmit(handleSubmitForm)();
    
    const handleNext = () => {
        console.log('clone voice')
        navigation.navigate('CloneVoice'); 
    }

    return (
            // <View style={styles.wrapper(AppTheme.Background)}>
        <ImageBackground source={require('../../assets/images/background_4.png')} >
            <ImageBackground source={require('../../assets/images/background_1.png')} >
                <View style={{
                    height: "100%",
                    paddingHorizontal: 20,
                    // justifyContent: "center",
                }}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                            {/* <Image source={require('../../assets/icons/doop.png')} style={{width: '50%', height:90}}/> */}
                            <View style={{borderRadius: 20, backgroundColor: '#DFDFDF', width: 380, height: 380}}></View>
                            <Text topSpacing={20} centered size={22} style={{fontWeight: '900'}}>
                                Loop Camera Feed
                            </Text>
                            <Text topSpacing={20} centered size={16} style={{width: '85%'}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                            </Text>

                            <Image source={require('../../assets/icons/bullet_1.png')} resizeMode="contain" style={{width: 100, height: 5, marginTop: 30}}/>
                            
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

export default LoopCameraFeed;
