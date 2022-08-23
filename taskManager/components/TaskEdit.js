import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { KEYS, readData, saveData } from "../storage/LocalDataStorage";
import Header from './elements/general/Header';
import Buttons from "./elements/taskEdit/Buttons";
import { colors } from './properties/colors';
import { general, taskEdit as styles } from './styles/Styles';

const TaskEdit = ({ navigation }) => {
  const [task, setTask] = useState({
    title: 'New Task',
    description: '',
    date: '',
    reminders: [],
    themeColor: colors.primary,
  });

  const saveTask = () => {
    readData({ key: KEYS.TASKS })
      .then(res => {
        let temp = res;
        temp.push(task);
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
