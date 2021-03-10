import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cart from '../../containers/pages/Cart';
import Transaction from '../../containers/pages/Transaction';
import Activity from '../../containers/pages/Activity';

const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const OrganizedRouter = () => {
  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="Cart" component={Cart} />
      <MaterialTopTabs.Screen name="Organized" component={Transaction} />
      <MaterialTopTabs.Screen name="Activity" component={Activity} />
    </MaterialTopTabs.Navigator>
  );
};

export default OrganizedRouter;

const styles = StyleSheet.create({});
