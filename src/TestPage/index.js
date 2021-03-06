import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ProductCardDefault from '../components/molecules/ProductCard/default';

const TestPage = () => {
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
    <ScrollView>
      <View style={styles.container}>
        {products.map((product) => {
          return (
            <ProductCardDefault
              key={product.id}
              avatar={product.avatar}
              type={product.type}
              rating={product.rating}
              review={product.review}
              location={product.location}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TestPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
