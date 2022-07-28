import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const buttons = ['My Tasks', 'My Notes', 'Other one', 'Settings'];

const Welcome = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperBackroundRect}></View>
        <View style={styles.upperRect}>
          <Text style={styles.upperText}>Task Manager</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((element, i) => (
          <TouchableOpacity key={i} style={styles.button}>
            <Text style={{color: '#000'}}>{element}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperContainer: {
    width: '100%',
    height: '40%',
  },
  upperRect: {
    width: '100%',
    height: '80%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperText: {
    color: '#fff',
    fontSize: 50,
  },
  upperBackroundRect: {
    position: 'absolute',
    backgroundColor: 'blue',
    top: '0%',
    width: '150%',
    height: '100%',
    rotation: 5,
    borderWidth: 2,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    height: '60%',
    backgroundColor: 'transparent',
    marginTop: '20%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    backgroundColor: '#fff',
    height: 120,
    margin: 10,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 2,
  },
});

export default Welcome;
