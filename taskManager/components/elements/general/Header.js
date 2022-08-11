import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { header } from '../../styles/Styles';

const Header = props => {
  return (
    <View style={header.upperContainer}>
      <View
        style={[header.upperBackroundRect, props.themeColor && { backgroundColor: `${props.themeColor}` }]}>
      </View>
      <View style={[header.upperRect, props.themeColor && { backgroundColor: `${props.themeColor}` }]}>
        {props.stateUpdate
          ? <TextInput style={header.input} value={props.state} onChangeText={props.stateUpdate} />
          : <Text style={header.upperText}>{props.text}</Text>
        }
      </View>
    </View>
  );
};

export default Header;
