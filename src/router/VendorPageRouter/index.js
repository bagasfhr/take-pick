import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VendorHome from '../../containers/pages/VendorHome';
import VendorProduct from '../../containers/pages/VendorProduct';
import VendorProject from '../../containers/pages/VendorProject';
import VendorReviews from '../../containers/pages/VendorReviews';
import {NavigationContainer} from '@react-navigation/native';
import ProfileVendorLarge from '../../containers/organism/ProfileVendorLarge';

const MaterialTopTabs = createMaterialTopTabNavigator();

const VendorPageRouter = () => {
  return (
    <NavigationContainer independent={true}>
      <ProfileVendorLarge />
      <MaterialTopTabs.Navigator
        tabBarOptions={{
          style: {
            // elevation: 0,
            // borderWidth: 0,
          },
        }}>
        <MaterialTopTabs.Screen name="Home" component={VendorHome} />
        <MaterialTopTabs.Screen name="Product" component={VendorProduct} />
        <MaterialTopTabs.Screen name="Project" component={VendorProject} />
        <MaterialTopTabs.Screen name="Reviews" component={VendorReviews} />
      </MaterialTopTabs.Navigator>
    </NavigationContainer>
  );
};

export default VendorPageRouter;

const styles = StyleSheet.create({});

// const VendorPageRouter = () => {
//     return (
//       <MaterialTopTabs.Navigator>
//         <MaterialTopTabs.Screen name="Home" component={VendorHome} />
//         <MaterialTopTabs.Screen name="Product" component={VendorProduct} />
//         <MaterialTopTabs.Screen name="Project" component={VendorProject} />
//         <MaterialTopTabs.Screen name="Reviews" component={VendorReviews} />
//       </MaterialTopTabs.Navigator>
//     );
//   };
