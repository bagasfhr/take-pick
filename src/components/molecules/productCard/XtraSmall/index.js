import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Star16, Coupon16} from '../../../../assets/icons';

const {height, width} = Dimensions.get('window');

const ProductXtraSmall = ({
  avatar,
  type,
  rating,
  location,
  title,
  newPrice,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: avatar}} />
        <View style={styles.deal}>
          <Text style={styles.dealText}>{type}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.ratingLocationContainer}>
          <Image source={Star16} />
          <Text style={styles.ratingLocation}>{rating} |</Text>
          <Text style={styles.ratingLocation}>{location}</Text>
        </View>
        <Text style={styles.titleProduct} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.price}>IDR {newPrice}</Text>
      </View>
    </View>
  );
};

export default ProductXtraSmall;

const styles = StyleSheet.create({
  container: {
    width: 128,
    height: 240,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 8,
  },
  textContainer: {
    padding: 8,
  },
  ratingLocationContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  image: {
    width: 128,
    height: 128,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'relative',
  },
  deal: {
    backgroundColor: '#F1887F',
    height: 17,
    borderTopRightRadius: 4,
    paddingHorizontal: 4,
    alignItems: 'center',
    position: 'absolute',
    top: 128 - 17,
  },
  dealText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 10.5,
    color: '#FFF',
    letterSpacing: 1,
  },
  ratingLocation: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10.5,
    letterSpacing: 1,
    lineHeight: 16.8,
    paddingLeft: 2,
  },
  titleProduct: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16.8,
    color: 'black',
    marginBottom: 8,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    letterSpacing: 1,
  },
});
