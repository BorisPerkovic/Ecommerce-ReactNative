import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {ECText} from '../components/ECText';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CartItem = () => {
  const title = 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops';
  return (
    <View style={styles.itemContainer}>
      <View style={styles.contentWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoWrapper}>
          <View>
            <ECText fontSize={16} textColor="black">
              {title.slice(0, 28)}...
            </ECText>
            <ECText fontSize={14} textColor="#ccc" bold>
              $199
            </ECText>
          </View>
          <View style={styles.quantityWrapper}>
            <View style={styles.quantity}>
              <TouchableOpacity
                onPress={() => {
                  console.log('minus clicked');
                }}>
                <EvilIcons name="minus" size={33} color="#ccc" />
              </TouchableOpacity>
              <ECText
                fontSize={20}
                textColor="black"
                style={{marginHorizontal: 15}}>
                1
              </ECText>
              <TouchableOpacity
                onPress={() => {
                  console.log('plus clicked');
                }}>
                <EvilIcons name="plus" size={33} color="#ccc" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log('trash clicked');
              }}>
              <EvilIcons name="trash" size={33} color="#ccc" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  contentWrapper: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  imageWrapper: {
    width: '30%',
    height: 100,
    padding: 14,
    backgroundColor: '#f0f0f3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 22,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  infoWrapper: {
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityIcons: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
});
