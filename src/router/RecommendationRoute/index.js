import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VendorPage from '../../containers/pages/Vendor';
import RecommendationPost from '../../containers/organism/RecommendationPost';
import {Home} from '../../containers/pages';

const Stack = createStackNavigator();

const RecommendationRoute = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Recommendation">
      <Stack.Screen name="Recommendation" component={Home} />
      <Stack.Screen name="Vendor" component={VendorPage} />
    </Stack.Navigator>
    /* </NavigationContainer> */
  );
};

export default RecommendationRoute;

const styles = StyleSheet.create({});
