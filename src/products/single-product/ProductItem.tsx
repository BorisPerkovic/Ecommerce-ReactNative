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
import {ProductsStackParams} from '../ProductsStack';
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import {singleProduct, SingleProductDTO} from './singleProductsSlice';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableRipple} from 'react-native-paper';
import {ECText} from '../../components/ECText';
import {ECButton} from '../../components/ECButton';
import {SingleProductSkeleton} from './SingleProductSkeleton';
import {addToCart} from '../../cart/cartSlice';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addToFavorites} from '../../favorites/favoritesSlice';
import {RootState} from '../../store';

const {
  singleProductButtonBakgroundColor,
  singleProductButtonTextColor,
  singleProductImageBackgroundColor,
  singleProductStatusBarColor,
  singleProductTextColor,
  iconRippleColor,
  singleProductBackIconColor,
  black,
} = ECOMMERCE_THEME.colors;

export const ProductItem = () => {
  const {params} = useRoute<RouteProp<ProductsStackParams, 'SingleProduct'>>();
  const product = useSelector((state: RootStateOrAny) => state.singleProduct);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritesItems,
  );

  const isFavorite = favorites.findIndex(
    item => item.id === product.product.id,
  );

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const handleAddToCart = (item: SingleProductDTO) => {
    dispatch(addToCart(item));
  };

  const AddToFavorites = (item: SingleProductDTO) => {
    dispatch(addToFavorites(item));
  };

  useEffect(() => {
    dispatch(
      singleProduct(`https://fakestoreapi.com/products/${params.productId}`),
    );
  }, [dispatch, params]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor={singleProductStatusBarColor}
        barStyle={'dark-content'}
      />
      {product.loading === 'pending' ? <SingleProductSkeleton /> : null}
      {product.loading === 'succeeded' ? (
        <>
          <View style={styles.imageContainer}>
            <TouchableRipple
              borderless
              style={styles.backIcon}
              rippleColor={iconRippleColor}
              accessibilityRole="button"
              onPress={() => navigate('Home')}>
              <Entypo
                name="chevron-left"
                size={30}
                color={singleProductBackIconColor}
              />
            </TouchableRipple>
            <Image
              source={{
                uri: product.product.image,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.someContent}>
            <View style={styles.textWrapper}>
              <ECText
                style={styles.title}
                fontSize={26}
                bold
                textColor={singleProductTextColor}>
                {product.product.title}
              </ECText>
              <ECText
                style={styles.description}
                fontSize={16}
                textColor={singleProductTextColor}>
                {product.product.description}
              </ECText>
              <View style={styles.divider} />
              <View style={styles.favoritesWrapper}>
                <View>
                  <ECText fontSize={23} bold textColor={singleProductTextColor}>
                    ${product.product.price}
                  </ECText>
                  <ECText fontSize={16} textColor={singleProductTextColor}>
                    Product Rating: {product.product.rating.rate.toString()} / 5
                  </ECText>
                </View>
                <View style={styles.favoritesIcon}>
                  <Ionicons
                    name={isFavorite >= 0 ? 'heart' : 'heart-outline'}
                    size={38}
                    color="#004666"
                    onPress={() => AddToFavorites(product.product)}
                  />
                </View>
              </View>
            </View>
            <View style={styles.button}>
              <ECButton
                buttonMode="contained"
                contentColor={singleProductButtonBakgroundColor}
                labelColor={singleProductButtonTextColor}
                onPress={() => handleAddToCart(product.product)}>
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
    flexGrow: 1,
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
    backgroundColor: singleProductImageBackgroundColor,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
  },
  image: {
    width: '60%',
    height: 200,
    resizeMode: 'contain',
  },
  someContent: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    alignContent: 'space-between',
    paddingHorizontal: 20,
  },
  favoritesWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  favoritesIcon: {
    padding: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#004666',
    borderRadius: 10,
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
    backgroundColor: black,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
});
