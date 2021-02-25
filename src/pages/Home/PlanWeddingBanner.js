import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import PlanBanner from '../../assets/images/PlanWeddingBanner.png';
import LinearGradient from 'react-native-linear-gradient';
import PrimaryButtonSmall from '../../components/Button/Primary/small';

const PlanBannerUri = Image.resolveAssetSource(PlanBanner).uri;

class PlanWeddingBanner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{uri: PlanBannerUri}}
          style={styles.banner}
          imageStyle={styles.image}>
          <LinearGradient
            colors={['rgba(82,87,92,0.5)', '#rgba(249,204,200,0.5)']}
            style={styles.linearGradient}>
            <View style={styles.text}>
              <Text style={styles.title}>Plan Your Wedding with Us</Text>
              <Text style={styles.body}>
                Take a survey and we give best price for you
              </Text>
            </View>
            <View style={styles.button}>
              <PrimaryButtonSmall
                text="Lets Plan"
                // onPress={props.handleSubmit}
                style={styles.buttonText}
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
    width: 328,
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
    marginLeft: 216,
    marginRight: 16,
    marginBottom: 16,
  },
});
