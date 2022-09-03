import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { readData, saveData } from '../../../storage/LocalDataStorage';
import { taskList as styles } from '../../styles/Styles';
import Task from './Task';


const EmptyTaskList = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>No task created.</Text>
    </View>
  )
}

const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    reloadTasks();
  })

  const reloadTasks = () => {
    readData({ key: "taskList" })
      .then(res => setTasks(res))
  }

  const onDelete = (id) => {
    const newList = tasks.filter((element, index) => {
      return index != id
    })

    saveData({
      key: "taskList",
      data: newList
    })
    setTasks(newList)
    reloadTasks();
  }

  const onEdit = (id) => {
    props.navigation.navigate("Task Edit", { taskId: id })
  }

  const renderItems = tasks.map((task, i) => (
    <Task
      {...task}
      key={i}
      id={i}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ))

  const content = tasks.length
    ? renderItems
    : <EmptyTaskList />

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={styles.taskContainer}>
        {content}
      </View>
    </ScrollView>
  );
}

export default TaskList;