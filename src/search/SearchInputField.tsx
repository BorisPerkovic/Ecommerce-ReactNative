import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {searchProductsThunk} from './searchSlice';
import {ECEmailInputField} from '../components/ECEmailInputField';
import {useTranslation} from 'react-i18next';

interface FormData {
  search: string;
}

const SearchInputField: FunctionComponent<{}> = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      search: '',
    },
  });
  const {t} = useTranslation('products');
  const dispatch = useDispatch();

  const onSubmitHandler = (param: FormData) => {
    dispatch(searchProductsThunk(param.search));
  };

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
            onChangeText={e => onChange(e)}
            returnKeyLabel="search"
            returnKeyType="search"
            value={value}
            onBlur={onBlur}
            onSubmitEditing={() => {
              handleSubmit(onSubmitHandler)();
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
