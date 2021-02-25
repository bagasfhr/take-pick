import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Category, Vendor, Article, Promo} from '../../assets/images';

// const Icon = (IconCategory, IconVendor, IconArticle, IconPromo);

class FlexBoxMenu extends Component {
  render() {
    return (
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
      </View>
    );
  }
}

export default FlexBoxMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
