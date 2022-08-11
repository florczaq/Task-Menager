import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { readData } from '../storage/LocalDataStorage';
import Header from './elements/general/Header';
import { general, taskList as styles } from './styles/Styles';


const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  const compressText = (text, maxLength) => {
    if (text.length < maxLength) return text;
    return `${String(text).slice(0, maxLength)}...`;
  };

  const convertDate = (date) => {
    return (date ? `Date:  ${new Date(date).toLocaleDateString()}` : "No date")
  }

  useEffect(() => {
    readData({ key: "taskList" }).then(res => {
      setTaskList(res)
    })
  }, [])

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.taskContainer}>
        {taskList.map((task, i) => (
          <TouchableOpacity key={i} style={styles.task}>

            <Text style={styles.taskTitle}>
              {compressText(task.title, 12)}
            </Text>

            <Text style={styles.date}>
              {convertDate(task.date)}
            </Text>

            <Text style={styles.description}>
              {compressText(task.description, 35)}
            </Text>

          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const MyTasks = () => {
  return (
    <SafeAreaView style={general.container}>
      <Header text="My Tasks" />
      <TaskList />
    </SafeAreaView>
  );
};

export default MyTasks;
