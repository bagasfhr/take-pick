import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../../components/atoms/Button';
import HeaderCard from '../../../components/molecules/HeaderCard';
import LocationCard from '../../../components/molecules/LocationCard';
import ButtonStyle from '../../../constant/Buttons/index';

const LocationVendorCard = () => {
  return (
    <View style={styles.container}>
      <HeaderCard title="Location" />
      <LocationCard />
      <CustomButton
        text="View on map"
        buttonType={ButtonStyle.outlinePrimaryLargeFull}
        buttonText={ButtonStyle.primaryText}
      />
    </View>
  );
};

export default LocationVendorCard;

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
});
