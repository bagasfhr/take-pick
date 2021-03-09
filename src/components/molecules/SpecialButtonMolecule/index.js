/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SpecialButtonMulecule = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icons/blueprint.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Venue Blueprint</Text>
        <Text style={styles.desc} numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          tristique praesent nulla dui
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Text>
          <Icon name="chevron-right" size={16} color="#52575C" />
        </Text>
      </View>
    </View>
  );
};

export default SpecialButtonMulecule;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
  },
  textContainer: {
    marginHorizontal: 16,
    maxWidth: 248,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 1,
  },
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    lineHeight: 16.8,
    letterSpacing: 1,
    marginTop: 8,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
