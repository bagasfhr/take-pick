import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import OrganizedRouter from '../../../router/OrganizedRouter';
import VendorPageRouter from '../../../router/VendorPageRouter';
import ProfileVendorLarge from '../../organism/ProfileVendorLarge';
import VendorHome from '../VendorHome';

const VendorPage = () => {
  return (
    <View>
      <ProfileVendorLarge />
      <VendorPageRouter />
    </View>
  );
};

export default VendorPage;

const styles = StyleSheet.create({});
