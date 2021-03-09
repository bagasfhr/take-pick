import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VendorPage from '../containers/pages/Vendor';

const testPage = () => {
  return (
    <ScrollView>
      <View>
        <VendorPage />
      </View>
    </ScrollView>
  );
};

export default testPage;

const styles = StyleSheet.create({});
