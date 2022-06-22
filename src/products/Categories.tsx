import React, {FunctionComponent, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
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
    url: config.TELEPHONES,
  },
  {
    name: 'televisions',
    url: config.TELEVISIONS,
  },
  {
    name: 'laptops',
    url: config.LAPTOPS,
  },
  {
    name: 'audio',
    url: config.AUDIO,
  },
  {
    name: 'photo-cameras',
    url: config.PHOTO_CAMERAS,
  },
];
interface CategoriesProps {
  setUrl: (url: string) => void;
}

export const Categories: FunctionComponent<CategoriesProps> = ({setUrl}) => {
  const [selectedCategory, setSelectedCategory] = useState('home');
  const {
    colors: {primaryChipColor, primaryChipTextColor},
  } = useAppTheme();
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
            <ECText fontSize={13} textColor={primaryChipTextColor}>
              {itemData.item.name.toLocaleUpperCase()}
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
    marginVertical: 10,
  },
  renderItemText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
