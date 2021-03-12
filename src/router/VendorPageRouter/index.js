import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VendorHome from '../../containers/pages/VendorHome';
import VendorProduct from '../../containers/pages/VendorProduct';
import VendorProject from '../../containers/pages/VendorProject';
import VendorReviews from '../../containers/pages/VendorReviews';

const MaterialTopTabs = createMaterialTopTabNavigator();

const VendorPageRouter = () => {
  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen name="Home" component={VendorHome} />
      <MaterialTopTabs.Screen name="Product" component={VendorProduct} />
      <MaterialTopTabs.Screen name="Project" component={VendorProject} />
      <MaterialTopTabs.Screen name="Reviews" component={VendorReviews} />
    </MaterialTopTabs.Navigator>
  );
};

export default VendorPageRouter;

const styles = StyleSheet.create({});
