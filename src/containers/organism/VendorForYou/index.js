import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ProductXtraSmall from '../../../components/molecules/ProductCard/XtraSmall';

const VendorForYou = () => {
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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Venue for you</Text>
        <Text style={styles.buttonText}>See all</Text>
      </View>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          {products.map((product) => {
            return (
              <ProductXtraSmall
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
    </View>
  );
};

export default VendorForYou;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingLeft: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 16,
    textDecorationLine: 'underline',
    color: '#ED675B',
  },
});
