import {ScrollView, StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {FavoritesItems} from './FavoritesItems';
import {ECHeader} from '../components/Header/ECHeader';
import {useAppTheme} from '../theme/theme';
import {useTranslation} from 'react-i18next';

export const Favorites: FunctionComponent<{}> = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <ECHeader screenTitle={t('myFavorites')} goBackIcon={false} />
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.container}
          bounces={false}
          showsVerticalScrollIndicator={false}>
          <FavoritesItems />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
});
