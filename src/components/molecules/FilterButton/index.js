import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../../components/atoms/CustomButton';
import ButtonStyle from '../../../constant/Buttons';

const FilterButton = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.textContainer}>
      <Text>Showing your result for "Venue"</Text>
    </View> */}
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Filter"
          buttonType={ButtonStyle.outlinePrimarySmallFlexRight}
          buttonText={ButtonStyle.primaryText}
          iconLeft="filter-list"
          iconRight="arrow-drop-down"
          iconColor={ButtonStyle.primaryIcon}
        />
        <CustomButton
          text="Sort"
          buttonType={ButtonStyle.outlinePrimarySmallFlex}
          buttonText={ButtonStyle.primaryText}
          iconLeft="sort"
          iconRight="arrow-drop-down"
          iconColor={ButtonStyle.primaryIcon}
        />
      </View>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    // elevation: 1,
  },
  textContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
