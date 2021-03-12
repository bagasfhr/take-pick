import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VendorPage from '../containers/pages/Vendor';
import VendorPageRouter from '../router/VendorPageRouter';

const testPage = () => {
  return (
    <View>
      <VendorPage />
    </View>
  );
};

export default testPage;

const styles = StyleSheet.create({});
