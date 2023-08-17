import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
// import { Text } from "../../components/Text";

const Profile = ({navigation}) => {
    const editProfile = () => {
        navigation.navigate('ProfileEdit')
    }

    const changePin = () => {

    }

    const logout = () => {
        navigation.navigate('Logout')
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
            <View style={{marginTop: 30,borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.6)', width: '90%', height: '59%', flexDirection: 'column', alignContent: 'center', alignItems: 'center'}}>
                <View style={{borderRadius: 20, marginTop: 20, backgroundColor: 'rgba(255,255,255,0.9)', width: '90%', height: 160, flexDirection: 'column', justifyContent: 'center'}}>
                    <View style={{flexDirection: 'row', paddingHorizontal:20, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{}}>
                            <Text>User ID</Text>
                            <Text>britneysparks</Text>
                        </View>
                        <Image source={require('../../assets/icons/copy.png')} style={{width: 30, height: 30}}/>
                    </View>
                    <View style={{marginTop: 20, flexDirection: 'row', paddingHorizontal:20, justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{}}>
                            <Text>Account Number</Text>
                            <Text>392030489134</Text>
                        </View>
                        <Image source={require('../../assets/icons/copy.png')} style={{width: 30, height: 30}}/>
                    </View>
                </View>
                <TouchableOpacity onPress={editProfile} style={{marginTop: 20, width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}> 
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icons/edit_profile.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                        <Text style={{fontSize: 14}}>Edit Profile Details</Text>
                    </View>
                    <Image source={require('../../assets/icons/arrow_right.png')} style={{width: 30, height:30}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={changePin} style={{marginTop: 20, width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icons/change_pin.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                        <Text style={{fontSize: 14}}>Change PIN</Text>
                    </View>
                    <Image source={require('../../assets/icons/arrow_right.png')} style={{width: 30, height:30}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout} style={{marginTop: 20, width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icons/logout.png')} style={{width: 50, height: 50, marginRight: 10}}/>
                        <Text style={{fontSize: 14}}>Logout</Text>
                    </View>
                    <Image source={require('../../assets/icons/arrow_right.png')} style={{width: 30, height:30}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Profile;
