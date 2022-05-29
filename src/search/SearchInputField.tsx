/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Controller, useForm} from 'react-hook-form';
import {ECText} from '../components/ECText';
import {useDispatch} from 'react-redux';
import {searchProductsThunk} from './searchSlice';

interface FormData {
  search: string;
}

const SearchInputField: FunctionComponent<{}> = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
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
            message: "field can't be empty",
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            style={[
              styles.searchInput,
              {
                borderColor: errors.search
                  ? '#EC3654'
                  : isFocused
                  ? '#004666'
                  : '#A3A8AE',
              },
            ]}
            placeholder="Type Search Term...."
            onChangeText={e => onChange(e)}
            returnKeyLabel="search"
            returnKeyType="search"
            onFocus={() => {
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            value={value}
            onSubmitEditing={handleSubmit(onSubmitHandler)}
          />
        )}
        name="search"
      />
      {errors.search ? (
        <ECText textColor={'#EC3654'} fontSize={15}>
          {errors.search.message}
        </ECText>
      ) : null}
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
