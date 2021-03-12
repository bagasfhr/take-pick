import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomButton({
  text,
  onPress,
  buttonType,
  buttonText,
  iconColor,
  iconLeft,
  iconRight,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonType}>
        <Icon name={iconLeft} size={16} style={iconColor} />
        <Text style={buttonText}>{text}</Text>
        <Icon name={iconRight} size={16} style={iconColor} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
