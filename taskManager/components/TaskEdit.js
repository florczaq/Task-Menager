import React, { useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';

import Header from './elements/general/Header';
import { colors } from './properties/colors';
import { general, taskEdit as styles } from './styles/Styles';
import Buttons from "./elements/taskEdit/Buttons"

const Description = props => {
  return (
    <TextInput
      placeholder="Description"
      style={styles.description}
      onChange={props.updateDescription}
    />
  );
};

const TaskEdit = ({ navigation }) => {
  const [task, setTask] = useState({
    title: 'New Task',
    description: '',
    date: '',
    reminders: [],
    themeColor: colors.primary,
  });

  return (
    <SafeAreaView style={general.container}>
      <Header state={task.title} stateUpdate={v => setTask({ ...task, title: v })} themeColor={task.themeColor} />
      <View style={styles.content}>
        <Description updateDescription={v => setTask({ ...task, description: v })} />
        <Buttons
          navigation={navigation}
          setDate={date => setTask({ ...task, date: date })}
          setReminders={rem => setTask({ ...task, reminders: rem })}
          setThemeColor={color => setTask({ ...task, themeColor: color })}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskEdit;
