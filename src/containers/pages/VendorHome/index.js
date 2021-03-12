import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import AboutVendorCard from '../../organism/AboutVendorCard';
import InfoVendorCard from '../../organism/InfoVendorCard';
import LocationVendorCard from '../../organism/LocationVendorCard';
import ProductVendorCard from '../../organism/ProductVendorCard';
import ReviewVendorCard from '../../organism/ReviewVendorCard';
import SpecialButtonVendor from '../../organism/SpecialButtonVendor';

const VendorHome = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SpecialButtonVendor />
      <AboutVendorCard />
      <ProductVendorCard />
      <InfoVendorCard />
      <LocationVendorCard />
      <ReviewVendorCard />
    </ScrollView>
  );
};

export default VendorHome;

const styles = StyleSheet.create({});
