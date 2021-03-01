import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import TestPage from './TestPage';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
      {/* <TestPage /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
