import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Welcome from './components/Welcome';
import NoteEdit from './components/NoteEdit';
import TaskEdit from './components/TaskEdit';
import TasksList from './components/TasksList';
import NotesList from './components/NotesList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Notes List" component={NotesList} />
        <Stack.Screen name="Task List" component={TasksList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
