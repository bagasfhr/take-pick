import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfileCardLarge from '../../../components/molecules/ProfileCard/Large';

const ProfileVendorLarge = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('http://10.0.2.2:3005/profiles').then((res) => {
      console.log('res get data', res);
      setProfiles(res.data);
    });
  };
  return (
    <View style={styles.card}>
      {profiles.map((profile) => {
        return (
          <ProfileCardLarge
            key={profile.id}
            name={profile.name}
            avatar={profile.avatar}
            review={profile.review}
            location={profile.location}
            country={profile.country}
            category={profile.category}
          />
        );
      })}
    </View>
  );
};

export default ProfileVendorLarge;

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    // borderWidth: 1,
    backgroundColor: '#fff',
    marginBottom: 4,
  },
});
