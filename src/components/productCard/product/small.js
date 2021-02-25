import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {color} from 'react-native-reanimated';
import {ProductSmall} from '../../../assets/images';
import {Star16, Coupon16} from '../../../assets/icons';

export default class SmallProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={ProductSmall} />
        </View>
        <View style={styles.deal}>
          <Text style={styles.dealText}>BEST DEAL</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={Star16} />
          <Text style={styles.ratingLocation}>4.73 (21)</Text>
          <Text style={styles.ratingLocation}>Bali, ID</Text>
        </View>
        <View>
          <Text style={styles.titleProduct}>
            Package Engagement Photo & Video
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={Coupon16} />
          <Text style={styles.pricePromo}>IDR 5.587.500</Text>
        </View>
        <View>
          <Text style={styles.price}>IDR 5.087.500</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 306,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 8,
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
    paddingLeft: 4,
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
