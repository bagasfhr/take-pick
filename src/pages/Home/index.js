import React, {Component} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PrimaryButtonSmall from '../../components/Button/Primary/small';
import FlexBoxMenu from './FlexBoxMenu';
import PlanWeddingBanner from './PlanWeddingBanner';
import {BannerCarousel} from '/Users/bagasfhr/Documents/Aplikasi/TakePick/src/components';
import product from '../../assets/data/product';
import SmallProduct from '../../components/productCard/Small';
import Column2Cardlist from '../../components/FlatList/Column2Card';
import Recommendation from './Recommendation';
import ReviewClientCard from '../../screens/ReviewClientCard';
// import Subtitle2 from '../../utils/constant';

// const images = Image.resolveAssetSource([Banner1, Banner2, Banner3]).uri;
// const images = {Banner1, Banner2, Banner3};

const images = [
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
  'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
];

const post1 = product[0];
const post2 = product[1];

const Home = () => {
  return (
    <View>
      <ScrollView>
        <BannerCarousel images={images} style={styles.banner} />
        <FlexBoxMenu />
        <PlanWeddingBanner />
        <View>
          <Text style={styles.recommendation}>Recommendation For You</Text>
          <Recommendation />
          <View style={styles.button}>
            <PrimaryButtonSmall
              text="View more"
              // onPress={props.handleSubmit}
              style={styles.buttonText}
            />
          </View>
        </View>
        <ReviewClientCard />
      </ScrollView>
    </View>
  );
};

export default Home;

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
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  recommendation: {
    marginHorizontal: 16,
    marginTop: 16,
    fontFamily: 'Poppins-SemiBold',
    // fontFamily: Subtitle2,
    fontSize: 14,
    lineHeight: 19.6,
    letterSpacing: 1,
  },
  button: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
});
