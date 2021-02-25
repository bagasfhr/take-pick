import React, {Component} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Banner1, Banner2, Banner3, PlanBanner} from '../../assets/images';
import PrimaryButtonSmall from '../../components/Button/Primary/small';
import SmallProduct from '../../components/productCard/product/small';
import FlexBoxMenu from './FlexBoxMenu';
import PlanWeddingBanner from './PlanWeddingBanner';
import {BannerCarousel} from '/Users/bagasfhr/Documents/Aplikasi/TakePick/src/components';

// const images = Image.resolveAssetSource([Banner1, Banner2, Banner3]).uri;
// const images = {Banner1, Banner2, Banner3};

const images = [
  'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
];

export default class Home extends Component {
  render() {
    return (
      // <View style={styles.container}>
      <View>
        <ScrollView>
          <BannerCarousel images={images} style={styles.banner} />
          <FlexBoxMenu />
          <PlanWeddingBanner />
          <View>
            <Text style={styles.recommendation}>Recommendation For You</Text>
            <View style={styles.card}>
              <SmallProduct />
              <SmallProduct />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  banner: {
    justifyContent: 'flex-start',
    height: windowHeight * 0.44,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  recommendation: {
    marginHorizontal: 16,
    marginVertical: 8,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 1,
  },
});
