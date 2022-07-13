import {Keyboard, StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {searchProductsThunk} from './searchSlice';
import {ECEmailInputField} from '../components/ECEmailInputField';
import {useTranslation} from 'react-i18next';
import {useDebouncedCallback} from 'use-debounce';

interface FormData {
  search: string;
}

const SearchInputField: FunctionComponent<{}> = () => {
  const {
    control,
    formState: {errors},
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      search: '',
    },
  });
  const {t} = useTranslation('products');
  const dispatch = useDispatch();

  const debounced = useDebouncedCallback(param => {
    if (param === '') {
      return;
    }

    dispatch(searchProductsThunk(param));
  }, 700);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: t('emptyField'),
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <ECEmailInputField
            label={t('searcProducst')}
            style={styles.searchInput}
            placeholder={t('searchTerm')}
            onChangeText={e => onChange(() => debounced(e))}
            returnKeyLabel="done"
            returnKeyType="done"
            value={value}
            onBlur={onBlur}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            error={errors.search?.message}
          />
        )}
        name="search"
      />
    </View>
  );
};

export default SearchInputField;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchInput: {
    height: 50,
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
