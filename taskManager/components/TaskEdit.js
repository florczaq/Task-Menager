import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';
import { KEYS, readData, saveData } from "../storage/LocalDataStorage";
import Header from './elements/general/Header';
import Buttons from "./elements/taskEdit/Buttons";
import * as Notifications from "./notificationsHandler/Notifications";
import { colors } from './properties/colors';
import { general, taskEdit as styles } from './styles/Styles';

const TaskEdit = ({ route, navigation }) => {
  const [task, setTask] = useState({
    title: 'New Task',
    description: '',
    date: new Date(),
    reminders: [],
    themeColor: colors.primary,
    id: uuid.v4().toString()
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

  const setRemindersNotification = () => {
    Notifications.createTaskReminders({
      taskId: task.id,
      title: task.title,
      description: task.description,
      taskDate: task.date,
      reminders: task.reminders
    })
  }

  const saveTask = () => {
    readData({ key: KEYS.TASKS })
      .then(res => {
        let temp = res;

        taskId != undefined
          ? temp[taskId] = task
          : temp.push(task);

        saveData({ key: KEYS.TASKS, data: temp })
        setRemindersNotification();
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
          taskDate={task.date}
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
