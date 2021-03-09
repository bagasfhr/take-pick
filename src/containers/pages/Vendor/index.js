import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfileVendorLarge from '../../organism/ProfileVendorLarge';
import SpecialButtonVendor from '../../organism/SpecialButtonVendor';

const VendorPage = () => {
  return (
    <ScrollView>
      <View>
        <ProfileVendorLarge />
        <SpecialButtonVendor />
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            flex: 1,
            flexWrap: 'wrap',
            // borderWidth: 1,
            // borderColor: 'lightgrey',
            // borderRadius: 8,
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 14,
              }}>
              About
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                fontSize: 12,
                letterSpacing: 1,
              }}>
              TITLE DESCRIPTION
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 12,
                letterSpacing: 1,
              }}
              numberOfLines={3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              amet scelerisque eleifend pharetra nisl morbi phasellus. Cras
              felis nibh egestas faucibus lorem...
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            flex: 1,
            flexWrap: 'wrap',
            // borderWidth: 1,
            // borderColor: 'lightgrey',
            // borderRadius: 8,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              marginBottom: 8,
            }}>
            Location
          </Text>
          <Image
            source={require('../../../assets/icons/Maps.png')}
            style={{flex: 1, marginBottom: 16}}
          />
          <Text>Depok, West Java. Indonesia</Text>
        </View>
        <LinearGradient
          colors={['rgba(249,204,200,0.2)', '#rgba(255,255,255,1)']}>
          <View
            style={{
              flexDirection: 'column',
              alignSelf: 'stretch',
              marginVertical: 8,
              paddingHorizontal: 16,
            }}>
            <View
              style={{
                alignItems: 'center',
                paddingVertical: 8,
                flexDirection: 'row',
              }}>
              <View style={{}}>
                <Text>
                  <Icon name="star" size={24} color="#F9CCC8" />
                </Text>
              </View>
              <View style={{flexGrow: 1, marginHorizontal: 8}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 14,
                    letterSpacing: 0.3,
                  }}>
                  221 reviews
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    textDecorationLine: 'underline',
                    color: '#ed675b',
                  }}>
                  See all
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 8,
                  borderWidth: 1,
                  padding: 8,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 16,
                  }}>
                  <Image
                    source={require('../../../assets/images/Banner1.png')}
                    style={{width: 40, height: 40, borderRadius: 40}}
                  />
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      flexGrow: 0,
                      marginHorizontal: 8,
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 14,
                        letterSpacing: 0.02,
                      }}>
                      Aisha
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Roboto',
                        fontStyle: 'italic',
                        fontSize: 10.5,
                      }}>
                      Sep 20, 2020
                    </Text>
                    <View>
                      <Text>
                        <Icon name="star" size={12} color="#F9CCC8" />
                        <Icon name="star" size={12} color="#F9CCC8" />
                        <Icon name="star" size={12} color="#F9CCC8" />
                        <Icon name="star" size={12} color="#F9CCC8" />
                        <Icon name="star" size={12} color="#F9CCC8" />
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: 12,
                      letterSpacing: 1,
                    }}
                    numberOfLines={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet tristique praesent nulla dui velit et orci. Pretium
                    magna molestie mattis ult...
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default VendorPage;

const styles = StyleSheet.create({});
