import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import ProductCardDefault from '../components/molecules/productCard/default';

// const images = [
//   'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
//   'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// ];

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
