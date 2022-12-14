import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {taskEdit as styles} from '../../styles/Styles';
import PickColor from '../general/PickColor';
import RemindersList from './ReminderList';

const Buttons = props => {
  const [openDate, setOpenDate] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [reminderModalVisible, setReminderModalVisible] = useState(false);
  const [dateButtonText, setDateButtonText] = useState('Set Date');
  const [themeColorText, setThemeColorText] = useState('Theme Color');
  const [remindersButtonText, setRemindersButtonText] =
    useState('Set reminders');

  const buttons = [
    {content: dateButtonText, func: () => setOpenDate(true)},
    {content: remindersButtonText, func: () => setReminderModalVisible(true)},
    {content: themeColorText, func: () => setOpenColorPicker(true)},
  ];

  const confirmButtons = [
    {content: '❌', func: () => props.navigation.goBack()},
    {
      content: '✔',
      func: () => {
        props.saveTask();
        props.navigation.navigate('Home');
      },
    },
  ];

  const buttonsRender = buttons.map((button, i) => (
    <TouchableOpacity key={i} style={styles.button} onPress={button.func}>
      <Text style={styles.buttonText}>{button.content}</Text>
    </TouchableOpacity>
  ));

  const confirmButtonsRender = confirmButtons.map((button, i) => (
    <TouchableOpacity
      key={i}
      style={styles.confirmButton}
      onPress={button.func}
    >
      <Text style={styles.buttonText}>{button.content}</Text>
    </TouchableOpacity>
  ));

  const dateSelected = date => {
    setOpenDate(false);
    props.setDate(date);
    setDateButtonText(
      `${date.toLocaleDateString()} ${date.toLocaleTimeString().slice(0, -3)}`,
    );
  };

  const validateReminderButtonText = reminders => {
    return reminders.length
      ? compressText(`Reminders: ${reminders.join(', ')}`, 21)
      : 'Set reminders';
  };

  const compressText = (text, maxLength) => {
    return text.length < maxLength ? text : `${text.slice(0, maxLength)}...`;
  };

  const saveReminders = reminders => {
    props.setReminders(reminders);
    setRemindersButtonText(validateReminderButtonText(reminders));
    setReminderModalVisible(false);
  };

  const saveThemeColor = selectedColor => props.setThemeColor(selectedColor);

  const closeThemeColor = () => setOpenColorPicker(false);

  const minimalDate = new Date(
    new Date().setMinutes(new Date().getMinutes() + 5),
  );

  return (
    <View style={styles.buttonContainer}>
      {buttonsRender}
      <View style={styles.confirmButtonContainer}>{confirmButtonsRender}</View>
      <DatePicker
        modal
        is24hourSource="device"
        title={'Task date'}
        open={openDate}
        date={props.taskDate ? new Date(props.taskDate) : minimalDate}
        minimumDate={minimalDate}
        onCancel={() => setOpenDate(false)}
        onConfirm={dateSelected}
        theme="light"
      />
      <RemindersList
        visible={reminderModalVisible}
        taskDate={props.taskDate || minimalDate}
        taskId={props.taskId}
        onSave={saveReminders}
      />
      <PickColor
        visible={openColorPicker}
        onSave={saveThemeColor}
        onClose={closeThemeColor}
      />
    </View>
  );
};

export default Buttons;
