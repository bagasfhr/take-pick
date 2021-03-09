import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LocationCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icons/Maps.png')} />
      <View style={styles.itemContainer}>
        <Icon name="location-on" size={16} color="#F9CCC8" />
        <Text style={styles.locationText}>Depok, West Java. Indonesia</Text>
      </View>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 16,
    marginBottom: 16,
    // flex: 1,
    // flexWrap: 'wrap',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  locationText: {
    marginLeft: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
  },
});
