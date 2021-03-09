import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../../constant/Colors';
// import Rating from 'react-native-ratings';

const Badge = require('../../../../assets/icons/badge.png');

const ProfileCardLarge = ({
  name,
  avatar,
  review,
  location,
  country,
  category,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>{name}</Text>
          {/* Button custom */}
          <View style={styles.customButton}>
            <Text style={{marginRight: 8}}>
              <Icon name="add" size={16} color={Colors.Primary_70} />
            </Text>
            <Text style={styles.buttonText}>follow</Text>
          </View>
        </View>
        {/* Button custom */}
        <View style={styles.itemContainer}>
          <Image source={{uri: avatar}} style={styles.avatar} />
          <View style={styles.item}>
            {/* Review */}
            <View style={styles.reviewContainer}>
              <Text>
                <Icon name="star" size={16} color="#F9CCC8" />
              </Text>
              <Text style={styles.contentText}>{review} reviews</Text>
            </View>
            {/* Locations */}
            <View style={styles.locationContainer}>
              <Text>
                <Icon name="location-on" size={16} color="#F9CCC8" />
              </Text>
              <Text style={styles.contentText}>
                {location}, {country}
              </Text>
            </View>
            {/* Category Vendor */}
            <View style={styles.categoryContainer}>
              <Text>
                <Icon name="menu" size={16} color="#F9CCC8" />
              </Text>
              <Text style={styles.contentText}>{category}</Text>
            </View>
            {/* Badge Icon */}
            <View style={styles.badgeContainer}>
              <Image source={Badge} style={styles.badge} />
              <Image source={Badge} style={styles.badge} />
              <Image source={Badge} style={styles.badge} />
              <Image source={Badge} style={styles.badge} />
              <Image source={Badge} style={styles.badge} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCardLarge;

const styles = StyleSheet.create({
  card: {
    // elevation: 1,
    // borderWidth: 1,
    // backgroundColor: '#fff',
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: 27,
    marginBottom: 8,
  },
  customButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    borderColor: Colors.Primary_70,
    // maxHeight: 24,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  reviewContainer: {
    flexDirection: 'row',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 8,
  },
  titleText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    lineHeight: 27,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.Primary_70,
  },
  contentText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
    marginLeft: 8,
  },
  badge: {
    width: 16,
    height: 16,
  },
});
