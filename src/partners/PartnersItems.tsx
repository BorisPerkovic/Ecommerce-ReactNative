import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {partners} from './partners';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppTheme} from '../theme';

export const PartnersItems = () => {
  const {
    colors: {cartImageBackgroundColor},
  } = useAppTheme();
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}>
      {partners.map((image, index) => (
        <View
          key={index + 'technologies'}
          style={[
            styles.imageContainer,
            {backgroundColor: cartImageBackgroundColor},
          ]}>
          <Image source={image.logo} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 150,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 130,
    height: 130,
  },
});
