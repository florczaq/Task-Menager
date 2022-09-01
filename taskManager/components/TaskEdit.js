import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { KEYS, readData, saveData } from "../storage/LocalDataStorage";
import Header from './elements/general/Header';
import Buttons from "./elements/taskEdit/Buttons";
import { colors } from './properties/colors';
import { general, taskEdit as styles } from './styles/Styles';

const TaskEdit = ({ route, navigation }) => {
  const [task, setTask] = useState({
    title: 'New Task',
    description: '',
    date: '',
    reminders: [],
    themeColor: colors.primary,
  });


  const validateTaskId = () => {
    try { return route.params.taskId; }
    catch (e) { return undefined; }
  }

  const taskId = validateTaskId();

  const loadTaskFromMemoryById = (id) => {
    readData({ key: KEYS.TASKS })
      .then(res => { setTask(res[id]) })
      .catch(err => { console.error(err) })
  }

  useEffect(() => {
    taskId != undefined && loadTaskFromMemoryById(taskId)
  }, []);

  const saveTask = () => {
    readData({ key: KEYS.TASKS })
      .then(res => {
        let temp = res;
        taskId != undefined
          ? temp[taskId] = task
          : temp.push(task);
        saveData({ key: KEYS.TASKS, data: temp })
      })
      .catch(e => {
        saveData({ key: KEYS.TASKS, data: [task] })
      })
  }

  return (
    <SafeAreaView style={general.container}>
      <Header state={task.title} stateUpdate={v => setTask({ ...task, title: v })} themeColor={task.themeColor} />
      <View style={styles.content}>
        <TextInput
          value={task.description}
          placeholder="Description"
          style={styles.description}
          onChangeText={(v) => setTask({ ...task, description: v })}
        />
        <Buttons
          navigation={navigation}
          setDate={date => setTask({ ...task, date: date })}
          setReminders={rem => setTask({ ...task, reminders: rem })}
          setThemeColor={color => setTask({ ...task, themeColor: color })}
          saveTask={saveTask}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskEdit;
