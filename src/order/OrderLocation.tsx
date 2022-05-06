import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import {ECEmailInputField} from '../components/ECEmailInputField';
import {Controller, useForm} from 'react-hook-form';
import {ecommerceButtonTheme} from '../theme/ecommerce/ecommerceButtonTheme';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ECButton} from '../components/ECButton';
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
    <KeyboardAwareScrollView
      enableOnAndroid
      enableAutomaticScroll={true}
      scrollEnabled={true}
      contentContainerStyle={styles.container}>
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
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => Keyboard.dismiss()}
              errorMessage={errors.city?.message}
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
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => Keyboard.dismiss}
              errorMessage={errors.country?.message}
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
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => Keyboard.dismiss()}
              errorMessage={errors.zipCode?.message}
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
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => Keyboard.dismiss()}
              errorMessage={errors.address?.message}
              ref={addressInputRef}
            />
          )}
          name="address"
        />
      </View>
      <View style={styles.button}>
        <ECButton
          labelText="Next"
          disabled={!isValid}
          buttonMode={!isValid ? disabledButton : primaryButtonContained}
          labelColor="#FFFFFF"
          onPress={handleSubmit(onSubmitHandler)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    marginTop: 10,
  },
  button: {
    paddingVertical: 25,
  },
});
