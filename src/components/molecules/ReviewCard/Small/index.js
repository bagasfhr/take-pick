import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import RatingAtoms from '../../../atoms/Rating';
import CardSize from '../../../../constant/CardSize';

const {height, width} = Dimensions.get('window');

const ReviewSmallCard = ({avatar, name, day, month, year, caption, card}) => {
  return (
    // Wrapper Container
    <View>
      <View style={card}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image style={styles.image} source={{uri: avatar}} />
          <View style={styles.titleContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>
              {month} {day}, {year}
            </Text>
            <RatingAtoms />
          </View>
        </View>
        <View>
          <Text numberOfLines={3} style={styles.caption}>
            {caption}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewSmallCard;

const styles = StyleSheet.create({
  container: {
    // width: 240,
    // height: 133,
    width: width / 1 - 100,
    // height: 133,
    backgroundColor: '#FEFEFE',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titleContainer: {
    marginLeft: 8,
    marginBottom: 16,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 19.6,
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10.5,
    fontStyle: 'italic',
    lineHeight: 14.7,
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
  },
});
