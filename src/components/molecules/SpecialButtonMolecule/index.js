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
    marginHorizontal: 16,
    marginVertical: 0,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
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
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
