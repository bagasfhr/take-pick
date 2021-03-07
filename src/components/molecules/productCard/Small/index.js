import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Star16, Coupon16} from '../../../../assets/icons';

const {height, width} = Dimensions.get('window');

const ProductCardSmall = ({
  avatar,
  type,
  rating,
  review,
  location,
  title,
  oldPrice,
  newPrice,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image style={styles.image} source={{uri: avatar}} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.deal}>
          <Text style={styles.dealText}>{type}</Text>
        </View>
        <View style={styles.ratingLocationContainer}>
          <Image source={Star16} />
          <Text style={styles.ratingLocation}>
            {rating} ({review})
          </Text>
          <Text style={styles.ratingLocation}>{location}</Text>
        </View>
        <View>
          <Text style={styles.titleProduct} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={Coupon16} />
          <Text style={styles.pricePromo}>IDR {oldPrice}</Text>
        </View>
        <View>
          <Text style={styles.price}>IDR {newPrice}</Text>
        </View>
      </View>
      {/* <Button title="Update" onPress={getData} /> */}
    </View>
  );
};

export default ProductCardSmall;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 12,
    height: height / 2,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  deal: {
    backgroundColor: '#F1887F',
    paddingHorizontal: 4,
    height: 17,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 8,
  },
  dealText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#FFF',
    letterSpacing: 1,
    lineHeight: 16.8,
  },
  ratingLocationContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  ratingLocation: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
    paddingLeft: 2,
  },
  titleProduct: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16.8,
    marginTop: 8,
  },
  pricePromo: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textDecorationLine: 'line-through',
    letterSpacing: 1,
    paddingLeft: 4,
    marginTop: 8,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 8,
  },
});
