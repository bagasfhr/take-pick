import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {Category, Vendor, Article, Promo} from '../../../assets/images';

// const Icon = (IconCategory, IconVendor, IconArticle, IconPromo);
const FlexBoxMenu = () => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <View style={styles.icon}>
            <Image source={Category} />
          </View>
          <Text style={styles.text}>Category</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.icon}>
            <Image source={Vendor} />
          </View>
          <Text style={styles.text}>Vendors</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.icon}>
            <Image source={Article} />
          </View>
          <Text style={styles.text}>Article</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.icon}>
            <Image source={Article} />
          </View>
          <Text style={styles.text}>Blog</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.icon}>
            <Image source={Promo} />
          </View>
          <Text style={styles.text}>Promo</Text>
        </View>
        <View style={styles.iconBox}>
          <View style={styles.icon}>
            <Image source={Promo} />
          </View>
          <Text style={styles.text}>Promo</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FlexBoxMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  iconBox: {
    width: 64,
    height: 64,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  text: {
    alignItems: 'center',
    fontSize: 10.5,
    fontFamily: 'Poppins-Medium',
  },
});
