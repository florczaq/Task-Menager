import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {tasks} from './examples/ExampleTaks';

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
    marginVertical: 10,
  },
});

export default TasksList;
