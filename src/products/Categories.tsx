import React, {FunctionComponent, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Chip} from 'react-native-paper';
import config from '../../config';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';

const CATEGORIES = [
  {
    name: 'home',
    url: config.BASE_URL,
  },
  {
    name: 'telephones',
    url: `${config.PRODUCTS_BY_CATEGORY}telephones`,
  },
  {
    name: 'televisions',
    url: `${config.PRODUCTS_BY_CATEGORY}televisions`,
  },
  {
    name: 'laptops',
    url: `${config.PRODUCTS_BY_CATEGORY}laptops`,
  },
  {
    name: 'audio',
    url: `${config.PRODUCTS_BY_CATEGORY}audio`,
  },
  {
    name: 'photoCameras',
    url: `${config.PRODUCTS_BY_CATEGORY}photoCameras`,
  },
];
interface CategoriesProps {
  setUrl: (url: string) => void;
}

const deviceHeight = Dimensions.get('screen').height;

export const Categories: FunctionComponent<CategoriesProps> = ({setUrl}) => {
  const [selectedCategory, setSelectedCategory] = useState('home');
  const {
    colors: {primaryChipColor, primaryChipTextColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={itemData => (
          <Chip
            mode="outlined"
            selected={selectedCategory === itemData.item.name}
            selectedColor={primaryChipTextColor}
            style={[
              styles.renderItemContainer,
              {backgroundColor: primaryChipColor},
            ]}
            textStyle={[styles.renderItemText, {color: primaryChipTextColor}]}
            onPress={() => {
              setUrl(itemData.item.url);
              setSelectedCategory(itemData.item.name);
            }}>
            <ECText
              fontSize={deviceHeight < 700 ? 10 : 13}
              textColor={primaryChipTextColor}>
              {t(itemData.item.name).toUpperCase()}
            </ECText>
          </Chip>
        )}
        keyExtractor={item => item.name.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  renderItemContainer: {
    marginRight: 5,
    marginVertical: deviceHeight < 700 ? 5 : 10,
  },
  renderItemText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
