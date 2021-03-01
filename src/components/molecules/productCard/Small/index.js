import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import {Star16, Coupon16} from '../../../../assets/icons';
// import product from '../../../assets/data/product'

const {height, width} = Dimensions.get('window');

const SmallProduct = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image style={styles.image} source={{uri: post.image}} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-evenly',
        }}>
        <View style={styles.deal}>
          <Text style={styles.dealText}>{post.type}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={Star16} />
          <Text style={styles.ratingLocation}>
            {post.rating} ({post.review})
          </Text>
          <Text style={styles.ratingLocation}>{post.location}</Text>
        </View>
        <View>
          <Text style={styles.titleProduct} numberOfLines={2}>
            {post.title}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={Coupon16} />
          <Text style={styles.pricePromo}>IDR {post.oldPrice}</Text>
        </View>
        <View>
          <Text style={styles.price}>IDR {post.newPrice}</Text>
        </View>
      </View>
    </View>
  );
};

export default SmallProduct;

const styles = StyleSheet.create({
  // container: {
  //   width: 160,
  //   height: 306,
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  // },
  // image: {
  //   borderRadius: 8,
  //   width: 160,
  //   height: 160,
  // },
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
