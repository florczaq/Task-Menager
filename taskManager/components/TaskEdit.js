import React, {useState} from 'react';
import Header from './elements/Header';
import DatePicker from 'react-native-date-picker';
import {general, taskEdit as styles} from './styles/Styles';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import PickColor from './elements/PickColor';
import {colors} from './properties/colors';

class RemindersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {content: '24 h', selected: false},
        {content: '12 h', selected: false},
        {content: '6 h', selected: false},
        {content: '4 h', selected: false},
        {content: '2 h', selected: false},
        {content: '1 h', selected: false},
        {content: '30 min', selected: false},
        {content: '15 min', selected: false},
        {content: '10 min', selected: false},
        {content: '5 min', selected: false},
      ],
    };
    this.itemSelected = this.itemSelected.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  itemSelected = id => {
    let temp = this.state.items;
    temp[id].selected = !temp[id].selected;
    this.setState({items: temp});
    this.forceUpdate();
  };

  renderItems = () => {
    return this.state.items.map((item, i) => (
      <TouchableOpacity
        key={i}
        style={[
          styles.reminderButton,
          styles[`_reminderButtonSelected_${item.selected}`],
        ]}
        onPress={() => this.itemSelected(i)}
      >
        <Text
          style={[
            styles.reminderButtonText,
            styles[`_reminderButtonTextSelected_${item.selected}`],
          ]}
        >
          {item.content}
        </Text>
      </TouchableOpacity>
    ));
  };

  saveReminders = () => {
    this.props.onSave(
      this.state.items
        .map(item => {
          return item.selected ? item.content : null;
        })
        .filter(item => {
          if (item !== undefined) return item;
        })
        .join(', '),
    );
  };

  render() {
    return (
      <Modal
        transparent
        animationType="fade"
        visible={this.props.visible}
        style={styles.reminderModal}
      >
        <View style={styles.reminderContainer}>
          <View style={styles.reminderScrollViewContainer}>
            <ScrollView style={styles.reminderScrollView}>
              <View style={styles.reminderItemsContainer}>
                {this.renderItems()}
              </View>
            </ScrollView>
          </View>

          <TouchableOpacity
            style={styles.reminderCloseButton}
            onPress={this.saveReminders}
          >
            <Text style={styles.reminderCloseButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

const Buttons = props => {
  const [openDate, setOpenDate] = useState(false);
  const [openColorPicker, setOpenColorPicker] = useState(false);
  const [reminderModalVisible, setReminderModalVisible] = useState(false);

  const [dateButtonText, setDateButtonText] = useState('Set Date');
  const [remindersButtonText, setRemindersButtonText] =
    useState('Set reminders');
  const [themeColorText, setThemeColorText] = useState('Theme Color');

  const buttons = [
    {
      content: dateButtonText,
      func: () => setOpenDate(true),
    },
    {
      content: remindersButtonText,
      func: () => setReminderModalVisible(true),
    },
    {
      content: themeColorText,
      func: () => setOpenColorPicker(true),
    },
  ];

  const confirmButtons = [
    {content: '❌', func: () => props.navigation.goBack()},
    // {content: 'Atch', func: () => {}},
    {content: '✔', func: () => props.navigation.navigate('Home')},
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
    const MAX_TEXT_SIZE = 25;
    if (!reminders) return 'Set reminders';
    return String(reminders).length > MAX_TEXT_SIZE
      ? `${reminders.toString().slice(0, MAX_TEXT_SIZE)}...`
      : reminders.toString();
  };

  const saveReminders = reminders => {
    setReminderModalVisible(false);
    props.setReminders(reminders);
    setRemindersButtonText(validateReminderButtonText(reminders));
  };

  const saveThemeColor = selectedColor => props.setThemeColor(selectedColor);

  const closeThemeColor = () => setOpenColorPicker(false);

  return (
    <View style={styles.buttonContainer}>
      {buttonsRender}
      <View style={styles.confirmButtonContainer}>{confirmButtonsRender}</View>
      <DatePicker
        modal
        is24hourSource="device"
        title={'Task date'}
        open={openDate}
        date={new Date()}
        minimumDate={new Date()}
        onCancel={() => setOpenDate(false)}
        onConfirm={dateSelected}
      />
      <RemindersList visible={reminderModalVisible} onSave={saveReminders} />
      <PickColor
        visible={openColorPicker}
        onSave={saveThemeColor}
        onClose={closeThemeColor}
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

const TaskEdit = ({navigation}) => {
  const [task, setTask] = useState({
    title: 'New Task',
    description: '',
    date: '',
    reminders: [],
    themeColor: colors.primary,
  });

  return (
    <SafeAreaView style={general.container}>
      <Header
        state={task.title}
        stateUpdate={v => setTask({...task, title: v})}
        themeColor={task.themeColor}
      />
      <View style={styles.content}>
        <Description
          updateDescription={v => setTask({...task, description: v})}
        />
        <Buttons
          navigation={navigation}
          setDate={date => setTask({...task, date: date})}
          setReminders={rem => setTask({...task, reminders: rem})}
          setThemeColor={color => setTask({...task, themeColor: color})}
        />
      </View>
    </SafeAreaView>
  );
};

export default TaskEdit;
