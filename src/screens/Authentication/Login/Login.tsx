import React, { useEffect, useRef, useState } from "react";
import {
    View,
    SafeAreaView,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";
import * as Yup from "yup";

// import styles from "./styles";

import { Text } from "../../../components/Text";
// import { Button } from "../../components/Button";
import { Button } from '@rneui/themed';
import { Icon } from "../../../components/Icon";
import { Form, FieldType, FormRefType } from "../../../form";
import { useTheme } from "../../../hooks";

import { APP_ROUTES } from "../../../routes";

import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CheckBox from 'react-native-check-box';
// import { Ionicons } from '@expo/vector-icons';
import { Card, CheckBox } from 'react-native-elements'
import Schedule from "../../Schedule/Schedule";

type FormDataType = {
    email: string;
    password: string;
};

const validationSchema = Yup.object({
    email: Yup.string().email("Please enter valid email").required("Please enter email"),
    password: Yup.string().required("Please enter password")
});

type LoginProps = {};

const Login: React.FC<LoginProps> = ({navigation}) => {
    const { AppTheme } = useTheme();
    const formRef = useRef<FormRefType<FormDataType>>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [checked, setChecked] = useState(false);

    const handleSubmitForm = (data: FormDataType) => {};
    const onSubmit = () => formRef?.current?.handleSubmit(handleSubmitForm)();
    
    const handleSignIn = () => {
        console.log('Schedule')
        navigation.navigate('Schedule'); 
    }

    return (
            // <View style={styles.wrapper(AppTheme.Background)}>
        // <ImageBackground source={require('../../assets/images/background_2.png')} >
            <ImageBackground source={require('../../../assets/images/background_4.png')} >
                <View style={{
                    height: "120%",
                    paddingHorizontal: 20,
                    // justifyContent: "center",
                }}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text>Sign In</Text>
                            <Image source={require('../../../assets/icons/doop.png')} style={{width: '50%', height:90, marginTop: 50 }}/>
                            {/* <View style={{borderRadius: 20, backgroundColor: '#DFDFDF', width: 380, height: 380}}></View> */}
                            <Text topSpacing={20} centered size={18} style={{fontWeight: '400', marginBottom: 30}}>
                                Sign in to continue
                            </Text>
                            <View style={{borderRadius: 10, paddingHorizontal: 20, paddingVertical:8, width: '86%', backgroundColor: 'rgba(255, 255, 255, 0.50)'}}>
                                <Text style={{fontSize: 12, color: '#666'}}>Email</Text>
                                <TextInput
                                    keyboardType="email-address"
                                    style={ { height: 30, borderColor: "gray", padding: 0 } }
                                />
                            </View>
                            <View style={{marginTop: 20,borderRadius: 10, paddingHorizontal: 20, paddingVertical:8, width: '86%', backgroundColor: 'rgba(255, 255, 255, 0.50)'}}>
                                <Text style={{fontSize: 12, color: '#666'}}>Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    // keyboardType="visible-password"
                                    style={ { height: 30, borderColor: "gray", padding: 0 } }
                                />
                            </View>
                            <View style={{width: '90%', flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
                                
                            {/* <CheckBox
                                containerStyle ={{backgroundColor: 'transparent', borderWidth:0}}
                                textStyle={{fontWeight:'normal', fontSize: 16}}
                                checkedColor={'grey'}
                                uncheckedColor={'grey'}
                                checkedIcon='check-square'
                                uncheckedIcon='square-o'
                                title={"Remember me"} checked={checked}
                                // onPress={onPress}
                            /> */}

                                <Text style={{fontSize: 14}}>Remember me</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Forgot password?</Text>
                            </View>
                            {/* <Image source={require('../../../assets/icons/bullet_2.png')} resizeMode="contain" style={{width: 100, height: 5, marginTop: 30}}/> */}
                            
                            <Button
                                title="Sign In"
                                buttonStyle={{
                                    paddingVertical: 14,
                                    backgroundColor: '#000000',
                                    borderRadius: 30,
                                }}
                                containerStyle={{
                                    width: 360,
                                    marginHorizontal: 50,
                                    marginTop: 20,
                                    marginBottom: 10,
                                }}
                                onPress={handleSignIn}
                            />
                            <View style={{width: '80%', flexDirection: 'row'}}>
                                <Text style={{fontSize: 14, marginRight: 10}}>Don't have an account?</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Sign up</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 30}}>
                                <Image source={require('../../../assets/icons/facebook.png')} style={{width: 70, height: 70}}/>
                                <Image source={require('../../../assets/icons/twiter.png')} style={{width: 70, height: 70}}/>
                                <Image source={require('../../../assets/icons/google.png')} style={{width: 70, height: 70}}/>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
        // </ImageBackground>
    );
};

export default Login;


const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
})
