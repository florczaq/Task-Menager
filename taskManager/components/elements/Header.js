import React from 'react';
import {View, Text} from 'react-native';
import {header} from '../styles/Styles';
const Header = props => {
  return (
    <View style={header.upperContainer}>
      <View style={header.upperBackroundRect}></View>
      <View style={header.upperRect}>
        <Text style={header.upperText}>{props.text}</Text>
      </View>
    </View>
  );
};

export default Header;
