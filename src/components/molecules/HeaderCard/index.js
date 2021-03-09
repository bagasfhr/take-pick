import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Color from '../../../constant/Colors';
import Colors from '../../../constant/Colors';

const HeaderCard = ({title, button, onPress}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: Colors.Black_100,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 16,
    textDecorationLine: 'underline',
    color: Colors.Primary_70,
  },
});
