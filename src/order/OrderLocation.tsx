import {Keyboard, Platform, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import {ECEmailInputField} from '../components/ECEmailInputField';
import {Controller, useForm} from 'react-hook-form';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {useDispatch, useSelector} from 'react-redux';
import {ECButton} from '../components/button/ECButton';
import {addUserLocationToOrder} from './ordersSlice';
import {RootState} from '../store';

interface Orderlocationprops {
  position: number;
  setPosition: (num: number) => void;
}

type FormData = {
  city: string;
  country: string;
  zipCode: string;
  address: string;
};

const {primaryButtonContained, disabledButton} = ecommerceButtonTheme;

export const OrderLocation: FunctionComponent<Orderlocationprops> = ({
  position,
  setPosition,
}) => {
  const userLocation = useSelector((state: RootState) => state.order.location);
  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      city: userLocation.city,
      country: userLocation.country,
      zipCode: userLocation.zipCode,
      address: userLocation.address,
    },
  });

  const countryInputRef = useRef<TextInput>(null);
  const zipCodeInputRef = useRef<TextInput>(null);
  const addressInputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();

  const onSubmitHandler = (formData: FormData) => {
    dispatch(
      addUserLocationToOrder({
        city: formData.city,
        country: formData.country,
        zipCode: formData.zipCode,
        address: formData.address,
      }),
    );
    setPosition(position + 1);
  };

  return (
    <>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'City is required',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              label="City"
              placeholder="Enter City"
              onChangeText={e => onChange(e)}
              returnKeyLabel="next"
              returnKeyType="next"
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => countryInputRef.current?.focus()}
              error={errors.city?.message}
            />
          )}
          name="city"
        />
      </View>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Country is required',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              ref={countryInputRef}
              label="Country"
              placeholder="Enter Country"
              returnKeyLabel="next"
              returnKeyType="next"
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => zipCodeInputRef.current?.focus()}
              error={errors.country?.message}
            />
          )}
          name="country"
        />
      </View>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Zip Code is required',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              ref={zipCodeInputRef}
              label="Zip Code"
              placeholder="Enter Zip Code"
              returnKeyLabel="default"
              returnKeyType="default"
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => {
                if (Platform.OS === 'android') {
                  addressInputRef.current?.focus();
                } else {
                  Keyboard.dismiss();
                }
              }}
              error={errors.zipCode?.message}
            />
          )}
          name="zipCode"
        />
      </View>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Address is required',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              label="Address"
              placeholder="Enter Address"
              returnKeyLabel="done"
              returnKeyType="done"
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => Keyboard.dismiss()}
              error={errors.address?.message}
              ref={addressInputRef}
            />
          )}
          name="address"
        />
      </View>
      <View style={styles.button}>
        <ECButton
          mode="contained"
          disabled={!isValid}
          variant={!isValid ? disabledButton : primaryButtonContained}
          onPress={handleSubmit(onSubmitHandler)}>
          Next
        </ECButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  inputs: {
    marginBottom: 20,
  },
  button: {
    paddingTop: 15,
  },
});
