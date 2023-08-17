import React, { useEffect, useContext, useState } from "react";
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
    Text,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { Button } from '@rneui/themed';

// import * as Yup from "yup";

// type FormDataType = {
//     email: string;
//     password: string;
// };

// const validationSchema = Yup.object({
//     email: Yup.string().email("Please enter valid email").required("Please enter email"),
//     password: Yup.string().required("Please enter password")
// });

const SignIn = ({navigation}) => {
    const { user, signIn } = useContext(AuthContext);

    // useEffect(() => {
    //     console.log("user: ", user);
    // }, [])

    return (
            <ImageBackground source={require('../../assets/images/background_4.png')} >
                <View style={{
                    height: "120%",
                    paddingHorizontal: 20,
                }}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text>Sign In</Text>
                            <Image source={require('../../assets/icons/doop.png')} style={{width: '50%', height:90, marginTop: 50 }}/>
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
                            {/* <Image source={require('../../assets/icons/bullet_2.png')} resizeMode="contain" style={{width: 100, height: 5, marginTop: 30}}/> */}
                            
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
                                onPress={signIn}
                            />
                            <View style={{width: '80%', flexDirection: 'row'}}>
                                <Text style={{fontSize: 14, marginRight: 10}}>Don't have an account?</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}} onPress={() => navigation.navigate("SignUp")}>Sign up</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: 30}}>
                                <Image source={require('../../assets/icons/facebook.png')} style={{width: 70, height: 70}}/>
                                <Image source={require('../../assets/icons/twiter.png')} style={{width: 70, height: 70}}/>
                                <Image source={require('../../assets/icons/google.png')} style={{width: 70, height: 70}}/>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
    );
};

export default SignIn;


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
