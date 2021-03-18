import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ProductCard from '../../../components/molecules/ProductCard';

const ProductList = (props) => {
  const {item} = props;
  return (
    <TouchableOpacity>
      <View>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

// const ProductList = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//       getData();
//     }, []);

//     const getData = () => {
//       Axios.get('http://10.0.2.2:3005/products').then((res) => {
//         console.log('res get data', res);
//         setProducts(res.data);
//       });
//     };

//     return (
//       <ScrollView>
//         <View style={styles.cardContainer}>
//           {products.map((product) => {
//             return (
//               <ProductCard
//                 key={product.id}
//                 avatar={product.avatar}
//                 type={product.type}
//                 rating={product.rating}
//                 review={product.review}
//                 location={product.location}
//                 title={product.title}
//                 oldPrice={product.oldPrice}
//                 newPrice={product.newPrice}
//               />
//             );
//           })}
//         </View>
//       </ScrollView>
//     );
//   };
