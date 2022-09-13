import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Header from './elements/general/Header';
import {general, welcomePage} from './styles/Styles';

const Buttons = ({navigation}) => {
  const buttons = [
    {name: 'My Tasks', link: 'Task List'},
    {name: 'My Notes', link: 'Notes List'},
    {name: 'New Task', link: 'Task Edit'},
    {name: 'New Note', link: 'Note Edit'},
  ];

  const navigate = link => link && navigation.navigate(link);

  const render = buttons.map((button, i) => (
    <TouchableOpacity
      key={i}
      style={welcomePage.button}
      onPress={() => navigate(button.link)}
    >
      <Text style={welcomePage.buttonText}>{button.name}</Text>
    </TouchableOpacity>
  ));

  return <View style={welcomePage.buttonContainer}>{render}</View>;
};

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="Task Manager" />
      <Buttons navigation={navigation} />
    </SafeAreaView>
  );
};

export default Welcome;
