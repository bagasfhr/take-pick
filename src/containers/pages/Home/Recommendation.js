import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import product from '../../../assets/data/product';
import SmallProduct from '../../../components/molecules/productCard/Small';
// import Column2Cardlist from '../../components/FlatList/Column2Card';

const post1 = product[0];
const post2 = product[1];
const post3 = product[2];
const post4 = product[3];
const post5 = product[4];
const post6 = product[5];

const Recommendation = () => {
  return (
    <View style={styles.container}>
      <SmallProduct post={post1} />
      <SmallProduct post={post2} />
      <SmallProduct post={post3} />
      <SmallProduct post={post4} />
      <SmallProduct post={post5} />
      <SmallProduct post={post6} />
      {/* <SmallProduct post={post3} />
      <SmallProduct post={post4} /> */}
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
