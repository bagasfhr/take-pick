import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductList from '../../organism/ProductList';
import ProductContainer from '../../templates/ProductContainer';

const Feeds = () => {
  return (
    <View>
      {/* <ProductList /> */}
      <ProductContainer />
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({});
