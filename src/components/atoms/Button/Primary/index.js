import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Color from '../../../../constant/Colors';

export default function PrimaryButtonSmall({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: Color.Primary_70,
  },
  buttonText: {
    color: Color.Black_5,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
});
