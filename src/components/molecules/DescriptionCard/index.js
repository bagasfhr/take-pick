import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DescriptionCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>TITLE DESCRIPTION</Text>
        <Text style={styles.description} numberOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur amet
          scelerisque eleifend pharetra nisl morbi phasellus. Cras felis nibh
          egestas faucibus lorem...
        </Text>
      </View>
    </View>
  );
};

export default DescriptionCard;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 16,
    // marginVertical: 8,
    // flex: 1,
    // flexWrap: 'wrap',
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
  },
});
