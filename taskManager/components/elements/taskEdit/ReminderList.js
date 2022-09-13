import React, {useEffect, useState} from 'react';
import {Modal, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {KEYS, readData} from '../../../storage/LocalDataStorage';
import {taskEdit as styles} from '../../styles/Styles';

export const REMINDERS_TIMES_LIST = [24, 12, 6, 4, 2, 1];

class ListRender extends React.Component {
  constructor(props) {
    super(props);
    this.itemSelected = this.itemSelected.bind(this);
  }

  itemSelected = id => {
    let temp = this.props.items;
    temp[id].selected = !temp[id].selected;
    this.props.setItems(temp);
    this.forceUpdate();
  };

  render() {
    return this.props.items.map((item, i) => (
      <TouchableOpacity
        key={i}
        style={[
          styles.reminderButton,
          styles[`_reminderButtonSelected_${item.selected}`],
          this.props.isOptionDisabled(item.content) &&
            styles._reminderButtonDisabled,
        ]}
        onPress={() => this.itemSelected(i)}
        disabled={this.props.isOptionDisabled(item.content)}
      >
        <Text
          style={[
            styles.reminderButtonText,
            styles[`_reminderButtonTextSelected_${item.selected}`],
          ]}
        >
          {`${item.content} h`}
        </Text>
      </TouchableOpacity>
    ));
  }
}

const ReminderList = props => {
  const [items, setItems] = useState(
    REMINDERS_TIMES_LIST.map(element => {
      return {content: element, selected: false};
    }),
  );

  useEffect(() => {
    props.taskId != undefined &&
      readData({key: KEYS.TASKS})
        .then(res => {
          setItems(
            REMINDERS_TIMES_LIST.map(element => {
              return {
                content: element,
                selected: res[props.taskId].reminders.indexOf(element) !== -1,
              };
            }),
          );
        })
        .catch(err => console.error(err));
  }, []);

  const isOptionDisabled = itemContent => {
    const minimalMinutesDifference = 5;
    const dateAfterSubstraction = new Date(props.taskDate).setHours(
      new Date(props.taskDate).getHours() - itemContent,
    );

    return (
      new Date().getTime() >
      new Date(dateAfterSubstraction).setMinutes(
        new Date(dateAfterSubstraction).getMinutes() - minimalMinutesDifference,
      )
    );
  };

  const saveReminders = () => {
    props.onSave(
      items
        .map(item => {
          return item.selected ? item.content : null;
        })
        .filter(item => {
          return item !== null;
        }),
    );
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={props.visible}
      style={styles.reminderModal}
    >
      <View style={styles.reminderContainer}>
        <View style={styles.reminderScrollViewContainer}>
          <ScrollView style={styles.reminderScrollView}>
            <View style={styles.reminderItemsContainer}>
              <ListRender
                items={items}
                isOptionDisabled={isOptionDisabled}
                setItems={setItems}
              />
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.reminderCloseButton}
          onPress={saveReminders}
        >
          <Text style={styles.reminderCloseButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ReminderList;
