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
  },
});

export default CardSize;
