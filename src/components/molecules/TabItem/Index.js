import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconFeeds,
  IconFeedsActive,
  IconHome,
  IconHomeActive,
  IconInbox,
  IconInboxActive,
  IconOrganized,
  IconOrganizedActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';
import {Primary_70, Grey_60} from '../../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') return isFocused ? <IconHomeActive /> : <IconHome />;
    if (label === 'Feeds')
      return isFocused ? <IconFeedsActive /> : <IconFeeds />;
    if (label === 'Organized')
      return isFocused ? <IconOrganizedActive /> : <IconOrganized />;
    if (label === 'Inbox')
      return isFocused ? <IconInboxActive /> : <IconInbox />;
    if (label === 'Profile')
      return isFocused ? <IconProfileActive /> : <IconProfile />;

    return <IconHome />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    fontSize: 10.5,
    color: isFocused ? Primary_70 : Grey_60,
  }),
});
