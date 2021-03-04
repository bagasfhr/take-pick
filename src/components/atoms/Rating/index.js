import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingAtoms = () => {
  return (
    <View>
      <Text>
        <Icon name="star" size={16} color="#F9CCC8" />
        <Icon name="star" size={16} color="#F9CCC8" />
        <Icon name="star" size={16} color="#F9CCC8" />
        <Icon name="star" size={16} color="#F9CCC8" />
        <Icon name="star" size={16} color="#F9CCC8" />
      </Text>
    </View>
  );
};

export default RatingAtoms;

const styles = StyleSheet.create({});
