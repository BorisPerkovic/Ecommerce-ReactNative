import {StyleSheet, View, Image, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import {TouchableRipple} from 'react-native-paper';

interface ProductsProps {
  image: string;
  price: number;
  title: string;
}

export const ProductsCard: FunctionComponent<ProductsProps> = ({
  image,
  price,
  title,
}) => {
  const rippleColor = 'rgba(0, 0, 0, 0.32)';
  return (
    <View style={styles.rippleContainer}>
      <TouchableRipple
        borderless
        rippleColor={rippleColor}
        accessibilityRole="button"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{borderRadius: 10}}
        onPress={() => {
          console.log('clicked');
        }}>
        <View style={styles.container}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      </TouchableRipple>

      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
      <Text>&#8377; {price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rippleContainer: {
    width: '48%',
    height: 150,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 60,
  },
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#f0f0f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  title: {
    width: 150,
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    marginBottom: 2,
  },
});
