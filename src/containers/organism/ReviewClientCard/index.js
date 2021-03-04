import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ReviewSmallCard} from '../../../components/molecules/ReviewCard';

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
    <ScrollView
      horizontal={true}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
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
  );
};

export default ReviewClientCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    marginBottom: 16,
  },
});
