import React from 'react';
import Header from './elements/general/Header';
import {general, welcomePage} from './styles/Styles';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';

const buttons = [
  {name: 'My Tasks', link: 'Task List'},
  {name: 'My Notes', link: 'Notes List'},
  {name: 'New Task', link: 'Task Edit'},
  {name: 'New Note', link: 'Note Edit'},
];

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="Task Manager" />
      <Buttons navigation={navigation} />
    </SafeAreaView>
  );
};

const Buttons = ({navigation}) => {
  const navigate = link => link && navigation.navigate(link);

  return (
    <View style={welcomePage.buttonContainer}>
      {buttons.map((button, i) => (
        <TouchableOpacity
          key={i}
          style={welcomePage.button}
          onPress={() => navigate(button.link)}
        >
          <Text style={welcomePage.buttonText}>{button.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Welcome;
