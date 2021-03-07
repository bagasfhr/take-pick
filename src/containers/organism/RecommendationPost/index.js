import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import ProductCardSmall from '../../../components/molecules/ProductCard/Small';

const RecommendationPost = () => {
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
        <Text style={styles.title}>Recommendation For You</Text>
      </View>
      <ScrollView>
        <View style={styles.cardContainer}>
          {products.map((product) => {
            return (
              <ProductCardSmall
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

export default RecommendationPost;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    marginRight: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
  },
});
