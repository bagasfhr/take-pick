import StyleSheet from 'react-native';
import Fonts from '../Fonts';

// 18, 15, 14, 12, 10.5, 9,
const TextStyle = StyleSheet.create({
  Title1: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 18,
  },
  Title2: {
    fontFamily: Fonts.poppinsMedium,
    fontSize: 15,
  },
  Subtitle1: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 15,
  },
  Subtitle2: {
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 14,
  },
  BodySpecial: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: 12,
  },
  BodyText: {
    fontFamily: Fonts.robotoRegular,
    fontSize: 12,
  },
  BodyTextBold: {
    fontFamily: Fonts.robotoBold,
    fontSize: 12,
  },
  PriceLarge: {
    fontFamily: Fonts.robotoBold,
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  PriceMedium: {
    fontFamily: Fonts.robotoBold,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  PriceSmall: {
    fontFamily: Fonts.robotoRegular,
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
});

export default TextStyle;
