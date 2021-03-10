import Colors from '../Colors';
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CardSize = StyleSheet.create({
  small: {
    width: width / 1 - 192,
    backgroundColor: '#FEFEFE',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  medium: {
    width: width / 1 - 100,
    backgroundColor: '#FEFEFE',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
  },
  large: {
    width: width / 1 - 16,
    backgroundColor: '#FEFEFE',
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    marginBottom: 8,
  },
  productSmallHorizontal: {
    width: width / 2 - 16,
    height: 306,
    // marginBottom: 16,
    marginLeft: 8,
  },
  productSmallVertical: {
    width: width / 2 - 12,
    height: 306,
    marginBottom: 16,
  },
});

export default CardSize;
