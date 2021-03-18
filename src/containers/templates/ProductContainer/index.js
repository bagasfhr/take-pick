import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ProductList from '../../organism/ProductList';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('http://10.0.2.2:3005/products').then((res) => {
      console.log('res get data', res);
      setProducts(res.data);
    });
  };

  return (
    <View>
      <Text>Product Container</Text>
      <FlatList
        // horizontal
        contentContainerStyle={{
          alignSelf: 'flex-start',
        }}
        // numColumns={2}
        data={products}
        renderItem={({item}) => <ProductList key={item.id} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({});
