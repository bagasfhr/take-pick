import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import StarRating from '../../../atoms/Rating';

// const {rating} = 2;

const ReviewSmallCard = () => {
  return (
    // Wrapper Container
    <View>
      <Text> This is Card </Text>
      <View
        style={{
          width: 240,
          height: 133,
          backgroundColor: '#FEFEFE',
          borderRadius: 8,
          padding: 8,
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={{width: 40, height: 40, borderRadius: 20}}
            source={{
              uri:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            }}
          />
          <View style={{marginLeft: 8, justifyContent: 'flex-start'}}>
            <Text style={styles.name}>Aisha</Text>
            <Text style={styles.date}>Sep 20, 2020</Text>
            {/* <StarRating number={5} views={2} /> */}
            <Text style={{width: 20}}>
              {/* <Rating
                showRating
                ratingCount={5}
                ratingColor="#F9CCC8"
                imageSize={16}
                readonly={true}
                // style={{paddingVertical: 10}}
              /> */}
            </Text>
          </View>
        </View>
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            tristique praesent nulla dui velit
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewSmallCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10.5,
    fontStyle: 'italic',
  },
  caption: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
  },
});
