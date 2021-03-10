import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text} from 'react-native';
import HeaderCard from '../../../components/molecules/HeaderCard';
import ProductCardSmall from '../../../components/molecules/ProductCard/Small';
import CardSize from '../../../constant/CardSize';

const ProductVendorCard = ({navigation}) => {
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
        <HeaderCard title="Product by this vendor" button="See all" />
      </View>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
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
                card={CardSize.productSmallHorizontal}
                // onPress={VendorPage}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductVendorCard;

const styles = StyleSheet.create({
  container: {
    // padding: 8,
    paddingVertical: 8,
    backgroundColor: 'white',
    marginBottom: 4,
    elevation: 1,
  },
  titleContainer: {
    paddingHorizontal: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 1,
  },
});
