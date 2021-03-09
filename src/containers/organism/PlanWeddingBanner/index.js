import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import PlanBanner from '../../../assets/images/PlanWeddingBanner.png';
import LinearGradient from 'react-native-linear-gradient';
import ButtonStyle from '../../../constant/Buttons/index';
import CustomButton from '../../../components/atoms/Button';

const PlanBannerUri = Image.resolveAssetSource(PlanBanner).uri;

const {width} = Dimensions.get('window');
class PlanWeddingBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: PlanBannerUri}}
          style={styles.banner}
          imageStyle={styles.image}>
          <LinearGradient
            colors={['rgba(82,87,92,0.3)', 'rgba(249,204,200,0.3)']}
            style={styles.linearGradient}>
            <View style={styles.text}>
              <Text style={styles.title}>Plan Your Wedding with Us</Text>
              <Text style={styles.body}>
                Take a survey and we give best price for you
              </Text>
            </View>
            <View style={styles.button}>
              <CustomButton
                text="Let's plan"
                buttonType={ButtonStyle.primarySmallFlex}
                buttonText={ButtonStyle.defaultText}
                iconRight={'chevron-right'}
                iconColor={ButtonStyle.defaultIcon}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}

export default PlanWeddingBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
  text: {
    marginHorizontal: 16,
    marginTop: 16,
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    width: width / 1 - 16,
    height: 210,
  },
  title: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginRight: 120,
  },
  body: {
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 8,
    marginRight: 150,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  // box: {
  //   alignItems: 'flex-end',
  //   flexDirection: 'column',
  //   marginRight: 16,
  // },
  button: {
    alignItems: 'flex-end',
    // marginLeft: 216,
    marginRight: 16,
    marginBottom: 16,
  },
});
