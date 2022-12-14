import React from 'react';
import {SafeAreaView} from 'react-native';
import CreateNewElement from './elements/general/CreateNewElement';
import Header from './elements/general/Header';
import TaskList from './elements/taskList/TaskList';
import {general} from './styles/Styles';

const MyTasks = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="My Tasks" />
      <TaskList navigation={navigation} />
      <CreateNewElement destination={'Task Edit'} navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyTasks;
