import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const tasks = [
  {
    title: 'Task 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis odio nec urna faucibus placerat quis non odio. ',
  },
  {title: 'Task 2', description: 'Lorem ipsum dolor sit'},
  {title: 'Task 3 ', description: 'Lorem ipsum'},
  {title: 'Task 4', description: 'Lorem '},
  {title: 'Task 5', description: 'a'},
  {
    title: 'Task 6',
    description:
      'consectetur adipiscing elit. Fusce quis odio nec urna faucibus placerat',
  },
  {title: 'Task 7', description: 'Lorem ipsum dolor sit amet'},
  {title: 'Task 8', description: 'consectetur adipiscing elit.'},
  {
    title: 'Task 9',
    description: ' Fusce quis odio nec urna faucibus placerat quis non odio.',
  },
  {title: 'Task 10', description: ' Fusce quis odio '},
  {
    title: 'LAST',
    description:
      'This is last task in my temporary task list na lenghth of this description is longer than 40 characters',
  },
];

const TasksList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperBackroundRect}></View>
        <View style={styles.upperRect}>
          <Text style={styles.title}>Task list</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.taskContainer}>
          {tasks.map((task, i) => (
            <TouchableOpacity key={i} style={styles.task}>
              <Text
                style={{
                  fontSize: 20,
                  width: '50%',
                  textAlign: 'center',
                }}
              >
                {task.title}
              </Text>
              <Text>
                {task.description.length > 40
                  ? `${task.description.slice(0, 40)}...`
                  : task.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
  },
  upperContainer: {
    width: '100%',
    height: '15%',
    marginBottom: 10,
  },
  upperRect: {
    width: '100%',
    height: '80%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '90%',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    margin: 0,
  },
  upperBackroundRect: {
    position: 'absolute',
    backgroundColor: 'blue',
    top: '0%',
    width: '150%',
    height: '100%',
    rotation: 3,
    borderWidth: 2,
  },
  underline: {
    width: '90%',
    height: 2,
    backgroundColor: '#fff',
    opacity: 0.7,
  },
  task: {
    backgroundColor: 'lightgrey',
    width: '90%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
    // flexDirection: 'row',
    paddingHorizontal: 20,
  },
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default TasksList;
