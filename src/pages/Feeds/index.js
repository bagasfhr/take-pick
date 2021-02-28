import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LocalAPI from '../../components/LocalAPI';

const Feeds = () => {
  return (
    <View>
      {/* <Text>Feeds (Test page)</Text> */}
      <LocalAPI />
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginBottom: 20,
  },
});
