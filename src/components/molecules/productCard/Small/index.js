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
        <View style={{flexDirection: 'row'}}>
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
        <View style={{flexDirection: 'row'}}>
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
    width: width / 2 - 20,
    height: height / 2 - 20,
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
    width: 85,
    height: 17,
    borderRadius: 4,
    alignItems: 'center',
  },
  dealText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#FFF',
    letterSpacing: 1,
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
  },
  pricePromo: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textDecorationLine: 'line-through',
    letterSpacing: 1,
    paddingLeft: 4,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
