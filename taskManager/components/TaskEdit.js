import notifee, { TriggerType } from "@notifee/react-native";
import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import uuid from 'react-native-uuid';
import { KEYS, readData, saveData } from "../storage/LocalDataStorage";
import Header from './elements/general/Header';
import Buttons from "./elements/taskEdit/Buttons";
import { colors } from './properties/colors';
import { general, taskEdit as styles } from './styles/Styles';

async function createReminderNotification({ date, title, description, triggerId }) {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  const trigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };

  await notifee.createTriggerNotification(
    {
      id: triggerId,
      title: title,
      body: description,
      android: {
        channelId: channelId,
      },
    },
    trigger,
  );
}

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
    const substractHoursFromDate = ({ date, hours }) => {
      return new Date(date).setHours(
        date.getHours() - hours
      )
    }

    // CLEAR ALL TRIGGERS FROM THIS TASK
    [24, 12, 6, 4, 2, 1].forEach((element) => {
      const triggerId = `${task.id}-${element}`;
      notifee.getTriggerNotifications()
        .then(
          res => {
            res.indexOf(triggerId) !== -1
              && notifee.cancelTriggerNotification(triggerId)
          }
        )
        .catch(
          err => { console.error(err) }
        )
    })

    // CREATE  NEW TRIGERS
    task.reminders.forEach((element) => {
      createReminderNotification({
        title: task.title,
        description: task.description,
        date: new Date(
          substractHoursFromDate({
            date: task.date,
            hours: element
          })),
        triggerId: `${task.id}-${element}`
      }).catch(err => {
        console.error(err)
        alert("Something went wrong with saving reminders. Make sure all reimnders are in the future.")
      })
    })

    // notifee.getTriggerNotifications()
    //   .then(res => {
    //     console.log(res)
    //   })
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
