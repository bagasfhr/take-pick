import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconLeftRight({
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
      <View props={buttonType}>
        <Icon name={iconLeft} size={16} style={iconColor} />
        <Text style={buttonText}>{text}</Text>
        <Icon name={iconRight} size={16} style={iconColor} />
      </View>
    </TouchableOpacity>
  );
}
