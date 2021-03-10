import React from 'react';
import {StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Cart from '../../pages/Cart';
import Transaction from '../../pages/Transaction';
import Activity from '../../pages/Activity';
import Colors from '../../../constant/Colors';

// const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

const Organized = () => {
  return (
    <MaterialTopTabs.Navigator
      tabBarOptions={{
        activeTintColor: Colors.Black_100,
        inactiveTintColor: Colors.Black_40,
      }}>
      <MaterialTopTabs.Screen name="Cart" component={Cart} />
      <MaterialTopTabs.Screen name="Organized" component={Transaction} />
      <MaterialTopTabs.Screen name="Activity" component={Activity} />
    </MaterialTopTabs.Navigator>
  );
};

export default Organized;

const styles = StyleSheet.create({});
