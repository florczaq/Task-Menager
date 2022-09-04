import React from 'react';
import { Text, TouchableOpacity, View, Animated, StyleSheet, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { taskList as styles } from '../../styles/Styles';

const MAX_LENGTH = {
  description: 30,
  title: 15,
};

const HiddenButtons = ({ visible, onEdit, onDelete }) => {

  return (
    visible &&
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Image style={styles.hiddenButtonImg} source={require("../../../resources/images/taskList/icons8-trash-64.png")} />
    </TouchableOpacity>
  )
}

const Task = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const slideX = React.useRef(new Animated.Value(0)).current;

  const compressText = (text, maxLength) => {
    return text.length < maxLength
      ? text
      : `${String(text).slice(0, maxLength)}...`
  };

  const convertDate = (date) => {
    return (
      date
        ? `Date:  ${new Date(date).toLocaleDateString()} ${new Date(date).getHours()}:${new Date(date).getMinutes()}`
        : ""
    )
  };

  const onDelete = () => {
    Animated.spring(slideX, { toValue: 0, duration: 300, useNativeDriver: true })
      .start(({ finished }) => { finished && (() => setExpanded(false)); });
    props.onDelete(props.id);
  };

  const onEdit = () => {
    props.onEdit(props.id)
  }

  const onSwipeLeft = (gestureState) => {
    if (gestureState.dx > -50) return;
    setExpanded(true);
    Animated.spring(slideX, { toValue: -110, duration: 500, useNativeDriver: true }).start();
  }

  const onSwipeRight = (gestureState) => {
    if (gestureState.dx < 100) return;
    Animated.spring(slideX, { toValue: 0, duration: 300, useNativeDriver: true }).start(
      ({ finished }) => { finished && (() => setExpanded(false)); }
    );
  }

  return (
    <Animated.View style={[styles.containerView, { transform: [{ translateX: slideX }] }]}>
      <GestureRecognizer style={styles.gestureRecognizer} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
        <TouchableOpacity
          style={[styles.task, { backgroundColor: props.themeColor }]}
          onPress={onEdit}
        >
          <Text style={styles.taskTitle}>
            {
              compressText(props.title, MAX_LENGTH.title)
            }
          </Text>
          <Text style={styles.date}>
            {
              convertDate(props.date)
            }
          </Text>
          <Text style={styles.description}>
            {
              compressText(props.description, MAX_LENGTH.description)
            }
          </Text>
        </TouchableOpacity>
      </GestureRecognizer>
      <HiddenButtons
        onEdit={onEdit}
        onDelete={onDelete}
        visible={expanded}
      />
    </Animated.View>
  );
}

export default Task;


{/* 
  <a target="_blank" href="https://icons8.com/icon/G01ACMKXfdpJ/trash">
   Trash
  </a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> 
*/ }