import React from 'react';
import { Text, TouchableOpacity, View, Animated } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { taskList as styles } from '../../styles/Styles';

const MAX_LENGTH = {
  description: 35,
  title: 22,
};

const HiddenButtons = props => {
  return (
    <>
      <TouchableOpacity style={styles.editButton}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={props.onDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </>
  )
}

const Task = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const slideX = React.useRef(new Animated.Value(0)).current;

  const compressText = (text, maxLength) => {
    if (text.length < maxLength) return text;
    return `${String(text).slice(0, maxLength)}...`;
  };

  const convertDate = (date) => {
    return (date ? `Date:  ${new Date(date).toLocaleDateString()}` : "")
  };

  const onDelete = () => {
    Animated.spring(slideX, { toValue: 0, duration: 300, useNativeDriver: true }).start(
      ({ finished }) => { finished && (() => setExpanded(false)); }
    );
    props.onDelete(props.id);
  };

  const onSwipeLeft = (gestureState) => {
    if (gestureState.dx > -150) return;
    setExpanded(true);
    Animated.spring(slideX, { toValue: -170, duration: 500, useNativeDriver: true }).start();
  }

  const onSwipeRight = (gestureState) => {
    if (gestureState.dx < 150) return;
    Animated.spring(slideX, { toValue: 0, duration: 300, useNativeDriver: true }).start(
      ({ finished }) => { finished && (() => setExpanded(false)); }
    );
  }

  return (
    <Animated.View style={[styles.containerView, { transform: [{ translateX: slideX }] }]}>
      <GestureRecognizer style={styles.gestureRecognizer} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
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
      {expanded && <HiddenButtons onDelete={onDelete} />}
    </Animated.View>
  );
}

export default Task;