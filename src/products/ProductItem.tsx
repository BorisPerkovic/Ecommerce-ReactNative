import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ProductsStackParams} from './ProductsStack';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {singleProduct} from './singleProductsSlice';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/ECButton';
import {Loading} from '../components/Loading';
import {SingleProductSkeleton} from './SingleProductSkeleton';

export const ProductItem = () => {
  const {params} = useRoute<RouteProp<ProductsStackParams, 'SingleProduct'>>();
  const product = useSelector((state: RootStateOrAny) => state.singleProduct);

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  useEffect(() => {
    dispatch(
      singleProduct(`https://fakestoreapi.com/products/${params.productId}`),
    );
  }, [dispatch, params]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor="#f0f0f3" barStyle={'dark-content'} />
      {product.loading === 'pending' ? <SingleProductSkeleton /> : null}
      {product.loading === 'succeeded' ? (
        <>
          <TouchableRipple
            borderless
            style={styles.backIcon}
            rippleColor="rgba(0, 0, 0, 0.32)"
            accessibilityRole="button"
            onPress={() => navigate('Products')}>
            <Entypo name="chevron-left" size={30} color="#004666" />
          </TouchableRipple>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: product.product.image,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.textWrapper}>
            <ECText style={styles.title} fontSize={26} bold textColor="black">
              {product.product.title}
            </ECText>
            <ECText style={styles.description} fontSize={16} textColor="black">
              {product.product.description}
            </ECText>
            <View style={styles.divider} />
            <ECText fontSize={23} bold textColor="black">
              ${product.product.price}
            </ECText>
            <ECText fontSize={16} textColor="black">
              Product Rating: {product.product.rating.rate.toString()} / 5
            </ECText>
            <View style={styles.button}>
              <ECButton
                buttonMode="contained"
                contentColor="#004666"
                onPress={() => console.log('clicked')}>
                Add To Cart
              </ECButton>
            </View>
          </View>
        </>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    flex: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 5,
    borderRadius: 50,
  },
  imageContainer: {
    width: '100%',
    height: (Dimensions.get('screen').height / 100) * 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f3',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
  },
  image: {
    width: '60%',
    height: 200,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  title: {
    marginVertical: 20,
  },
  description: {
    marginBottom: 20,
    fontWeight: '400',
    opacity: 0.6,
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 20,
    marginTop: 20,
  },
});
