import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DescriptionVendor from '../../organism/DescriptionVendor';
import LocationVendorCard from '../../organism/LocationVendorCard';
import ProductVendorCard from '../../organism/ProductVendorCard';
import ProfileVendorLarge from '../../organism/ProfileVendorLarge';
import ReviewVendorCard from '../../organism/ReviewVendorCard';
import SpecialButtonVendor from '../../organism/SpecialButtonVendor';

const VendorPage = () => {
  return (
    <ScrollView>
      <View>
        <ProfileVendorLarge />
        <SpecialButtonVendor />
        <DescriptionVendor />
        <ProductVendorCard />
        <LocationVendorCard />
        <ReviewVendorCard />
      </View>
    </ScrollView>
  );
};

export default VendorPage;

const styles = StyleSheet.create({});
