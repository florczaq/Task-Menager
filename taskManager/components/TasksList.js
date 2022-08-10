import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {TaskGenerator} from './examples/ExampleData';
import {general, taskList} from './styles/Styles';
import Header from './elements/Header';

const tasks = TaskGenerator(20);

const MyTasks = () => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="My Tasks" />
      <TaskList />
    </SafeAreaView>
  );
};

const TaskList = () => {
  const validateDescription = description => {
    const MAX_TEXT_LENGTH = 35;
    if (description.length < MAX_TEXT_LENGTH) return description;
    return `${description.slice(0, MAX_TEXT_LENGTH)}...`;
  };

  return (
    <ScrollView style={taskList.scrollView}>
      <View style={taskList.taskContainer}>
        {tasks.map((task, i) => (
          <TouchableOpacity key={i} style={taskList.task}>
            <Text style={taskList.taskTitle}>{task.title}</Text>
            <Text style={taskList.date}>
              {`Date:  ${task.date.toLocaleDateString()}`}
            </Text>
            <Text style={taskList.description}>
              {validateDescription(task.description)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default MyTasks;
