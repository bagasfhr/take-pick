import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../../../constant/Colors';

const StarRatings = (starCount, halfStar) => {
  if (!starCount || typeof starCount !== 'number') return null;

  const stars = [];

  for (let i = 0; i < starCount; i++) {
    stars.push(i);
  }

  return (
    <View style={style.container}>
      {stars.map((item) => (
        <Icon
          key={item.toString()}
          name="star"
          size={24}
          color={Color.Primary_70}
        />
      ))}
      {halfStar && <Icon name="star-half" size={24} color={Color.Primary_70} />}
    </View>
  );
};

export default StarRatings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
