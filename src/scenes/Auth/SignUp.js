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

import {Auth} from 'aws-amplify';

const AMAZON_COGNITO_USER_POOL_ID="us-east-1_0yxLQcfNb"
const AWS_REGION="us-east-1"
const AMAZON_APP_CLIENT_ID="3magocf5mf28verr66pgrkjinu"

// import * as Yup from "yup";

// type FormDataType = {
//     email: string;
//     password: string;
// };

// const validationSchema = Yup.object({
//     email: Yup.string().email("Please enter valid email").required("Please enter email"),
//     password: Yup.string().required("Please enter password")
// });

const SignUp = ({navigation}) => {
    const { user, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // useEffect(() => {
    //     console.log("user: ", user);
    // }, [])

    console.log('email: ', email)
    console.log('password: ', password)
    console.log('confirmPassword: ', confirmPassword)

    const handleSignUp = async () => {
      Amplify.configure({
        Auth: {
          region: AWS_REGION,
          userPoolId: AMAZON_COGNITO_USER_POOL_ID,
          userPoolWebClientId: AMAZON_APP_CLIENT_ID,
        },
      });
      
      try {
        const {user} = await Auth.signUp({
          // username,
          password,
          attributes: {
            email,
          },
        });
        console.log(user);
      } catch (error) {
        console.log('error signing up:', error);
      }
    }

    return (
            <ImageBackground source={require('../../assets/images/background_4.png')} >
                <View style={{
                    height: "120%",
                    paddingHorizontal: 20,
                }}>
                    <SafeAreaView>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <Text>Sign Up</Text>
                            <Image source={require('../../assets/icons/doop.png')} style={{width: '50%', height:90, marginTop: 50 }}/>
                            <Text topSpacing={20} centered size={18} style={{fontWeight: '400', marginBottom: 30}}>
                                Welcome
                            </Text>
                            <View style={{borderRadius: 10, paddingHorizontal: 20, paddingVertical:8, width: '86%', backgroundColor: 'rgba(255, 255, 255, 0.50)'}}>
                                <Text style={{fontSize: 12, color: '#666'}}>Email</Text>
                                <TextInput
                                    keyboardType="email-address"
                                    style={{ height: 30, borderColor: "gray", padding: 0 }}
                                    value={email}
                                    onChangeText={newEmamil => setEmail(newEmamil)}
                                />
                            </View>
                            <View style={{marginTop: 20,borderRadius: 10, paddingHorizontal: 20, paddingVertical:8, width: '86%', backgroundColor: 'rgba(255, 255, 255, 0.50)'}}>
                                <Text style={{fontSize: 12, color: '#666'}}>Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    // keyboardType="visible-password"
                                    style={ { height: 30, borderColor: "gray", padding: 0 } }
                                    value={password}
                                    onChangeText={newPassword => setPassword(newPassword)}
                                />
                            </View>
                            <View style={{marginTop: 20,borderRadius: 10, paddingHorizontal: 20, paddingVertical:8, width: '86%', backgroundColor: 'rgba(255, 255, 255, 0.50)'}}>
                                <Text style={{fontSize: 12, color: '#666'}}>Confirm Password</Text>
                                <TextInput
                                    secureTextEntry={true}
                                    // keyboardType="visible-password"
                                    style={ { height: 30, borderColor: "gray", padding: 0 } }
                                    value={confirmPassword}
                                    onChangeText={newConfirmPassword => setConfirmPassword(newConfirmPassword)}
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

                                {/* <Text style={{fontSize: 14}}>Remember me</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Forgot password?</Text> */}
                            </View>
                            {/* <Image source={require('../../assets/icons/bullet_2.png')} resizeMode="contain" style={{width: 100, height: 5, marginTop: 30}}/> */}
                            
                            <Button
                                title="Sign Up"
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
                                onPress={handleSignUp}
                            />
                            <View style={{width: '80%', flexDirection: 'row'}}>
                                <Text style={{fontSize: 14, marginRight: 10}}>Already have an account?</Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}} onPress={() => navigation.navigate("SignIn")}>Sign in</Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </View>
            </ImageBackground>
    );
};

export default SignUp;


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
