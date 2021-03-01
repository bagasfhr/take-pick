import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {BannerCarousel} from '../components';

// const images = [
//   'https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   'https://images.unsplash.com/photo-1519741497674-611481863552?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   'https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
//   'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// ];

const TestPage = ({image}) => {
  return (
    <View>
      <BannerCarousel images={image} />
    </View>
  );
};

const LocalImageAPI = () => {
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get('http://localhost:3005/images').then((res) => {
      console.log('res get data', res);
      setImages(res.data);
    });
  };
  return (
    <View>
      <Images key={image.id} images={image.images} />
    </View>
  );
};

export default TestPage;

const styles = StyleSheet.create({
  TextTest: {
    alignItems: 'center',
  },
});
