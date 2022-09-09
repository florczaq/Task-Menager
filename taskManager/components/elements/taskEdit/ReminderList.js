import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { taskEdit as styles } from "../../styles/Styles";

export const REMINDERS_TIMES_LIST = [
  24, 12, 6, 4, 2, 1
]

export default class RemindersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: REMINDERS_TIMES_LIST.map((element) => {
        return { content: element, selected: false }
      })
    };
    this.itemSelected = this.itemSelected.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  itemSelected = id => {
    let temp = this.state.items;
    temp[id].selected = !temp[id].selected;
    this.setState({ items: temp });
    this.forceUpdate();
  };

  isOptionDisabled = (itemContent) => {
    const minimalMinutesDifference = 5;
    const dateAfterSubstract = new Date(this.props.taskDate)
      .setHours(this.props.taskDate
        .getHours() - itemContent
      )
    return new Date().getTime() > new Date(dateAfterSubstract)
      .setMinutes(
        new Date(dateAfterSubstract)
          .getMinutes() - minimalMinutesDifference
      );
  }

  renderItems = () => {
    return this.state.items.map((item, i) => (
      <TouchableOpacity
        key={i}
        style={
          [
            styles.reminderButton,
            styles[`_reminderButtonSelected_${item.selected}`],
            this.isOptionDisabled(item.content) && styles._reminderButtonDisabled
          ]}
        onPress={() => this.itemSelected(i)}
        disabled={
          this.isOptionDisabled(item.content)
        }
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