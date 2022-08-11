import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { taskEdit as styles } from "../../styles/Styles";

export default class RemindersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { content: '24 h', selected: false },
        { content: '12 h', selected: false },
        { content: '6 h', selected: false },
        { content: '4 h', selected: false },
        { content: '2 h', selected: false },
        { content: '1 h', selected: false },
        { content: '30 min', selected: false },
        { content: '15 min', selected: false },
        { content: '10 min', selected: false },
        { content: '5 min', selected: false },
      ],
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