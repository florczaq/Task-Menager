import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { taskList as styles } from '../../styles/Styles';

const MAX_LENGTH = {
  description: 35,
  title: 22,
};

const Task = (props) => {

  const compressText = (text, maxLength) => {
    if (text.length < maxLength) return text;
    return `${String(text).slice(0, maxLength)}...`;
  };

  const convertDate = (date) => {
    return (date ? `Date:  ${new Date(date).toLocaleDateString()}` : "")
  };

  const onDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <View style={styles.containerView}>
      <GestureRecognizer style={styles.gestureRecognizer} onSwipeLeft={onDelete}>
        <TouchableOpacity style={[styles.task, { backgroundColor: props.themeColor }]}>
          <Text style={styles.taskTitle}>
            {compressText(props.title, MAX_LENGTH.title)}
          </Text>
          <Text style={styles.date}>
            {convertDate(props.date)}
          </Text>
          <Text style={styles.description}>
            {compressText(props.description, MAX_LENGTH.description)}
          </Text>
        </TouchableOpacity>
      </GestureRecognizer>
    </View>
  );
}

export default Task;