import React from "react";
import { TouchableOpacity, View, ImageBackground, Image, Pressable } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from "../../hooks";
import { Text } from "../../components/Text";

type LogoutProps = {};

const Logout: React.FC<LogoutProps> = (props) => {
    const { AppTheme } = useTheme();
    const handleConfirm = () => {
        console.log('handleConfirm')
    }

    return (
        <View style={{flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
        <Text style={{
            fontSize: 16,
            fontFamily: 'Poppins-SemiBold',
            color: '#000000',
            alignSelf: 'center',
            fontWeight: '700',
            }}>
                PROFILE
        </Text>
            <View>
                <Image source={require('../../assets/icons/base.png')} style={{position:'absolute', width:240, height: 240, top:11}} />
                <Image source={require('../../assets/icons/pic.png')} style={{width:140, height: 140, margin: 50}} />
                <Image source={require('../../assets/icons/edit.png')} style={{position:'absolute', width:120, height: 120, top:140, left:62}} />
                <Image source={require('../../assets/icons/pencil_1.png')} style={{position:'absolute', width:30, height: 30, top:170, left:108}} />
            </View>
            <Text style={{position:'absolute', top:240, fontSize: 20}}>Britney Sparks</Text>
            <View style={{marginTop: 20, borderRadius: 20, backgroundColor: '#E8E9FD', width: '90%', height: '61%', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/icons/illustration_2.png')} style={{marginTop: 30, width: 150, height: 150}}/>
                <Text style={{fontSize: 22}}>Are You Sure?</Text>
                <Text centered style={{width: '70%', margin: 10, fontSize: 12 }}>Are you sure you want to logout from this account? you can loging back in easily.</Text>
                
                <Pressable onPress={handleConfirm} style={{width: '70%', height: 50, margin: 10, backgroundColor: '#9194F2', borderRadius: 30, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{color: 'white', fontSize: 16}}>Create New Account</Text>
                </Pressable>
                <Pressable onPress={handleConfirm} style={{width: '70%', height: 50, margin: 10, backgroundColor: 'white', borderRadius: 30, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
                    <Text style={{color: '#7273BB', fontSize: 16}}>Login to Existing Account</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Logout;
