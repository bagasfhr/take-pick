import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import product from '../../../assets/data/product';
import Recommendation from '../../../pages/Home/Recommendation';
import SmallProduct from '../../productCard/Small';

const Column2Cardlist = (props) => {
  const post = props.post;
  return (
    <View>
      {/* <FlatList
        style={styles.list}
        numColumns={2}
        keyExtractor={({item}) => <SmallProduct post={item} />}
        data={product}
        renderItem={({item}) => <SmallProduct post={item} />}
      /> */}
      {/* <Recommendation /> */}
      <SmallProduct />
    </View>
  );
};

export default Column2Cardlist;

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 16,
  },
});
