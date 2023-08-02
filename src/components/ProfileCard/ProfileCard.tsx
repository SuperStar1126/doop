import {StyleSheet, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/pic.png')}
        borderRadius={100}
        style={{width: 250, height: 250}}
        // width={10}
        // height={10}
      />
      <TouchableOpacity style={styles.cameraContainer}>
        <Icon name="camera" size={18} color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: Dimensions.get("window").width / 37,
    paddingVertical: Dimensions.get("window").height / 81,
  },
  cameraContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get("window").width / 41,
    paddingVertical: Dimensions.get("window").height / 90,
    position: 'absolute',
    right: Dimensions.get("window").width / 75,
    bottom: Dimensions.get("window").height / 81,
  },
});
