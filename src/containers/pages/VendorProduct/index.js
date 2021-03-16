import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../../components/atoms/CustomButton';
import FilterButton from '../../../components/molecules/FilterButton';
import ButtonStyle from '../../../constant/Buttons';
import Color from '../../../constant/Colors';
import ProductVendorCardList from '../../organism/ProductVendorCardList';

const VendorProduct = () => {
  return (
    <View>
      <FilterButton />
      <ProductVendorCardList />
    </View>
  );
};

export default VendorProduct;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    // elevation: 1,
  },
  textContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
