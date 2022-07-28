import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
