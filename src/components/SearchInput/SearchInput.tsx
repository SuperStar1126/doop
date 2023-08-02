import {Image, StyleSheet, TextInput, View} from 'react-native';
import React, { FC } from 'react';
import {Dimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SearchInput = {
    value: string,
    onChangeText(...args: unknown[]): unknown;
}

const SearchInput: React.FC<SearchInput> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/icons/search.png')} style={{width: 20, height:20}}/>
        <TextInput
            placeholder="Search for names & keywords"
            style={styles.input}
            placeholderTextColor={'#9796A1'}
            value={value}
            onChangeText={onChangeText}
        />
        <Image source={require('../../assets/icons/filter.png')} style={{width: 20, height:20}}/>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EAEBEC',
    alignItems: 'center',
  },
  input: {
    marginLeft: Dimensions.get('window').width / 50,
    paddingVertical: Dimensions.get('window').height / 100,
    width: '86%'
  },
});
