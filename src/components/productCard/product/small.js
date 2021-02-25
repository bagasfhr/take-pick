import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
// import {ProductSmall} from '../../../assets/images';
import {Star16, Coupon16} from '../../../assets/icons';
// import product from '../../../assets/data/product'

const SmallProduct = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: post.image}} />
      </View>
      <View style={styles.deal}>
        <Text style={styles.dealText}>{post.type}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={Star16} />
        <Text style={styles.ratingLocation}>
          {post.rating} ({post.review})
        </Text>
        <Text style={styles.ratingLocation}>{post.location}</Text>
      </View>
      <View>
        <Text style={styles.titleProduct} numberOfLines={2}>
          {post.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image source={Coupon16} />
        <Text style={styles.pricePromo}>IDR {post.oldPrice}</Text>
      </View>
      <View>
        <Text style={styles.price}>IDR {post.newPrice}</Text>
      </View>
    </View>
  );
};

//   return (
//     <View style={styles.container}>
//       <View>
//         <Image style={styles.image} source={props.image} />
//       </View>
//       <View style={styles.deal}>
//         <Text style={styles.dealText}>{props.bestDeal}</Text>
//       </View>
//       <View style={{flexDirection: 'row'}}>
//         <Image source={Star16} />
//         <Text style={styles.ratingLocation}>{props.rating}</Text>
//         <Text style={styles.ratingLocation}>{props.location}</Text>
//       </View>
//       <View>
//         <Text style={styles.titleProduct} numberOfLines={2}>
//           {props.productName}
//         </Text>
//       </View>
//       <View style={{flexDirection: 'row'}}>
//         <Image source={Coupon16} />
//         <Text style={styles.pricePromo}>{props.pricePromo}</Text>
//       </View>
//       <View>
//         <Text style={styles.price}>{props.price}</Text>
//       </View>
//     </View>
//   );
// };

// const SmallProduct = () => {
//   return (
//     <View style={styles.container}>
//       <Content
//         image={ProductSmall}
//         bestDeal="BEST DEAL"
//         rating="4.73 (21)"
//         location="Bali, ID"
//         productName="Package Engagement Photo & Video"
//         pricePromo="IDR 5.587.500"
//         price="IDR 5.087.500"
//       />
//     </View>
//   );
// };

export default SmallProduct;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 306,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 8,
    width: 160,
    height: 160,
  },
  deal: {
    backgroundColor: '#F1887F',
    width: 85,
    height: 17,
    borderRadius: 4,
    alignItems: 'center',
  },
  dealText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
    color: '#FFF',
    letterSpacing: 1,
  },
  ratingLocation: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 16.8,
    paddingLeft: 4,
  },
  titleProduct: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16.8,
  },
  pricePromo: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textDecorationLine: 'line-through',
    letterSpacing: 1,
    paddingLeft: 4,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    letterSpacing: 1,
  },
});
