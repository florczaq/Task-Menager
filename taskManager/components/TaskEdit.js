import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {general, taskEdit as styles} from './styles/Styles';
import Header from './elements/Header';
import DatePicker from 'react-native-date-picker';

const Buttons = props => {
  const [openDate, setOpenDate] = useState(false);
  const today = new Date();

  const buttons = [
    {content: 'Set date', func: () => setOpenDate(true)},
    {content: 'Set reminder', func: () => {}},
    {content: 'Preferences', func: () => {}},
  ];

  const confirmButtons = [
    {content: '❌', func: () => props.navigation.goBack()},
    {content: 'Atch', func: () => {}},
    {content: '✔', func: () => props.navigation.navigate('Task List')},
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

  return (
    <View style={styles.buttonContainer}>
      {buttonsRender}
      <View style={styles.confirmButtonContainer}>{confirmButtonsRender}</View>
      <DatePicker
        modal
        is24hourSource="device"
        title={'Task date'}
        open={openDate}
        date={today}
        minimumDate={today}
        onCancel={() => setOpenDate(false)}
        onConfirm={date => {
          setOpenDate(false), props.setDate(date);
        }}
      />
    </View>
  );
};

const Description = props => {
  return (
    <TextInput
      placeholder="Description"
      style={styles.description}
      onChange={props.updateDescription}
    />
  );
};

const TaskEdit = ({navigation}, props) => {
  const [task, setTask] = useState({
    title: 'New Task',
    description: '',
    date: '',
    reminder: '',
  });
  const updateTitle = v => setTask({...task, title: v});
  const updateDescription = v => setTask({...task, description: v});

  return (
    <SafeAreaView style={general.container}>
      <Header state={task.title} stateUpdate={updateTitle} />
      <View style={styles.content}>
        <Description updateDescription={updateDescription} />
        <Buttons
          navigation={navigation}
          setDate={date => setTask({...task, date: date})}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskEdit;
