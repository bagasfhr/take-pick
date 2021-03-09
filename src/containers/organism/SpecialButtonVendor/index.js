import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SpecialButtonMulecule from '../../../components/molecules/SpecialButtonMolecule';
import Colors from '../../../constant/Colors';

const SpecialButtonVendor = () => {
  return (
    <View style={styles.container}>
      <SpecialButtonMulecule />
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Colors.Black_10,
        }}
      />
      <SpecialButtonMulecule />
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Colors.Black_10,
        }}
      />
      <SpecialButtonMulecule />
    </View>
  );
};

export default SpecialButtonVendor;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 1,
    marginBottom: 4,
  },
});
