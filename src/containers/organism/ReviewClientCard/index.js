import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ReviewSmallCard} from '../../../components/molecules/ReviewCard';
import LinearGradient from 'react-native-linear-gradient';

const ReviewClientCard = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('http://10.0.2.2:3005/reviews').then((res) => {
      console.log('res get data review', res);
      setReviews(res.data);
    });
  };
  return (
    <LinearGradient
      colors={
        (['rgba(249,204,200,0.2)', 'rgba(255,255,255,1)'],
        ['rgba(255,255,255,0)', 'rgba(249,204,200,1)'])
      }
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Review from client</Text>
          <Text style={styles.buttonText}>See all</Text>
        </View>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.cardContainer}>
            {reviews.map((review) => {
              return (
                <ReviewSmallCard
                  key={review.id}
                  avatar={review.avatar}
                  name={review.name}
                  day={review.day}
                  month={review.month}
                  year={review.year}
                  caption={review.caption}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

// ['rgba(249,204,200,0.2)', 'rgba(255,255,255,1)']
export default ReviewClientCard;

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
  },
  container: {
    marginVertical: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    marginLeft: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 16,
    textDecorationLine: 'underline',
    color: '#ED675B',
  },
});
