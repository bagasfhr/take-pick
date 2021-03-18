import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Color from '../../../constant/Colors';
import {Coupon16} from '../../../assets/icons';

const {width, height} = Dimensions.get('window');

const ProductCard = (props, onPress) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.avatar}} style={styles.image} />
        <View style={styles.dealContainer}>
          <Text style={styles.dealText}>{props.type}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color={Color.Primary_10} />
          <Text style={styles.ratingText}>
            {props.rating} ({props.review})
          </Text>
          <Text style={styles.ratingText}>{props.location}</Text>
        </View>
        <View style={styles.productContainer}>
          <Text style={styles.productText}>{props.title}</Text>
        </View>
        <View style={styles.oldPriceContainer}>
          <Image source={Coupon16} />
          <Text style={styles.oldPriceText}>IDR {props.oldPrice}</Text>
        </View>
        <View style={styles.newPriceContainer}>
          <Text style={styles.newPriceText}>IDR {props.newPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: width / 2 - 12,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 1,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  contentContainer: {
    padding: 8,
  },
  imageContainer: {
    padding: 4,
  },
  dealContainer: {
    backgroundColor: Color.Black_5,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 8,
    left: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    marginTop: 8,
  },
  oldPriceContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  newPriceContainer: {
    marginTop: 8,
  },
  image: {
    borderRadius: 8,
    width: 'auto',
    height: 160,
  },
  dealText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: Color.Black_80,
    // letterSpacing: 1,
    lineHeight: 16.8,
  },
  ratingText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
    marginLeft: 8,
  },
  productText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16.8,
  },
  oldPriceText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textDecorationLine: 'line-through',
    letterSpacing: 1,
    marginLeft: 8,
  },
  newPriceText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
