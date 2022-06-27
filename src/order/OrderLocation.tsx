import {Keyboard, Platform, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useRef} from 'react';
import {ECEmailInputField} from '../components/ECEmailInputField';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {ECButton} from '../components/button/ECButton';
import {addUserLocationToOrder} from './ordersSlice';
import {RootState} from '../store';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

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

export const OrderLocation: FunctionComponent<Orderlocationprops> = ({
  position,
  setPosition,
}) => {
  const {
    buttons: {primaryButtonContained, disabledButton},
  } = useAppTheme();
  const {t} = useTranslation('order');
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
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: t('cityRequired'),
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              label={t('city')}
              placeholder={t('enterCity')}
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
              message: t('countryRequired'),
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              ref={countryInputRef}
              label={t('country')}
              placeholder={t('enterCountry')}
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
              message: t('zipCodeRequired'),
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              ref={zipCodeInputRef}
              label={t('zipCode')}
              placeholder={t('enterZipCode')}
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
              message: t('addressRequired'),
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              label={t('address')}
              placeholder={t('enterAddress')}
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
          mode="outlined"
          disabled={!isValid}
          variant={!isValid ? disabledButton : primaryButtonContained}
          onPress={handleSubmit(onSubmitHandler)}>
          {t('next')}
        </ECButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  inputs: {
    marginBottom: 20,
  },
  button: {
    paddingTop: 15,
  },
});
