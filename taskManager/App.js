import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import NoteEdit from './components/NoteEdit';
import MyNotes from './components/MyNotes';
import TaskEdit from './components/TaskEdit';
import MyTasks from './components/MyTasks';
import Welcome from './components/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Task List" component={MyTasks} />
        <Stack.Screen name="Notes List" component={MyNotes} />
        <Stack.Screen name="Note Edit" component={NoteEdit} />
        <Stack.Screen name="Task Edit" component={TaskEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
