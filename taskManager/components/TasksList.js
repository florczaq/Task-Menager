import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { readData, saveData } from '../storage/LocalDataStorage';
import Header from './elements/general/Header';
import { general, taskList as styles } from './styles/Styles';

const Task = (props) => {

  const compressText = (text, maxLength) => {
    if (text.length < maxLength) return text;
    return `${String(text).slice(0, maxLength)}...`;
  };

  const convertDate = (date) => {
    return (date ? `Date:  ${new Date(date).toLocaleDateString()}` : "No date")
  }

  const onDelete = (state) => {
    props.onDelete(state, props.id);
  }

  return (
    <View style={styles.animatedView}>
      <GestureRecognizer style={styles.gestureRecognizer} onSwipeLeft={onDelete}>
        <TouchableOpacity style={[styles.task, props.task.themeColor && { backgroundColor: props.task.themeColor }]}>
          <Text style={styles.taskTitle}>
            {compressText(props.task.title, 22)}
          </Text>
          <Text style={styles.date}>
            {convertDate(props.task.date)}
          </Text>
          <Text style={styles.description}>
            {compressText(props.task.description, 35)}
          </Text>
        </TouchableOpacity>
      </GestureRecognizer>
    </View>
  );
}

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);

  const reloadTasks = () => {
    readData({ key: "taskList" }).then(res => {
      setTaskList(res)
    })
  }

  useEffect(() => reloadTasks(), [])

  const onSwipeLeft = (gestureState, id) => {
    if (gestureState.dx > -100) return;
    saveData({
      key: "taskList",
      data: taskList.filter((element, index) => {
        return index != id;
      })
    })
    reloadTasks();
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.taskContainer}>
        {taskList.length > 0 ? (taskList.map((task, i) => (
          <Task key={i} task={task} id={i} onDelete={onSwipeLeft} />
        ))) : (
          <View style={styles.emptyList}>
            <Text style={styles.emptyListText}>No task created.</Text>
          </View>
        )}
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
