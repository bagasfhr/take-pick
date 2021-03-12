import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DescriptionCard from '../../../components/molecules/DescriptionCard';
import HeaderCard from '../../../components/molecules/HeaderCard';

const AboutVendorCard = () => {
  return (
    <View style={styles.container}>
      <HeaderCard title="About" />
      <DescriptionCard />
    </View>
  );
};

export default AboutVendorCard;

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
