import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import Router from './config/router';
import Router from './router/HomepageRouter';
import TestPage from './testPage';

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
