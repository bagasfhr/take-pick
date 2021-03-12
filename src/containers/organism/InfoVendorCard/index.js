import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DescriptionCard from '../../../components/molecules/DescriptionCard';
import HeaderCard from '../../../components/molecules/HeaderCard';

const InfoVendorCard = () => {
  return (
    <View style={styles.container}>
      <HeaderCard title="Vendor info" />
      <DescriptionCard />
    </View>
  );
};

export default InfoVendorCard;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom: 4,
    elevation: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
  },
  Button: {
    borderRadius: 8,
  },
});
