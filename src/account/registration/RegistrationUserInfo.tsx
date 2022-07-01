import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import * as yup from 'yup';
import {ECButton} from '../../components/button/ECButton';
import {Controller, useForm} from 'react-hook-form';
import {ECEmailInputField} from '../../components/ECEmailInputField';
import {
  addUserToRegister,
  registerUserThunk,
  resetIsLoading,
} from './registrationSlice';
import config from '../../../config';
import {emailSchema} from './setSchema';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

interface RegistrationUserInfoprops {
  position: number;
  setPosition: (num: number) => void;
}

interface FormData {
  name: string;
  lastname: string;
  email: string;
}

const createAccountEmailSchema = yup.object().shape({
  ...emailSchema,
});

export const RegistrationUserInfo: FunctionComponent<
  RegistrationUserInfoprops
> = ({position, setPosition}) => {
  const {
    buttons: {primaryButtonContained, disabledButton},
  } = useAppTheme();
  const {t} = useTranslation('account');
  const isLoading = useSelector(
    (state: RootState) => state.registration.loading,
  );
  const registry = useSelector((state: RootState) => state.registration.error);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    resolver: yupResolver(createAccountEmailSchema),
    mode: 'onTouched',
  });

  const onSubmitHandler = async (form: FormData) => {
    const data = {
      name: form.name,
      lastname: form.lastname,
      email: form.email,
    };

    await dispatch(addUserToRegister(data));
    await dispatch(
      registerUserThunk({url: config.REGISTRATION_CHECK_EMAIl, data}),
    );
  };

  const lastnameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isLoading === 'succeeded' && registry === 'accept') {
      dispatch(resetIsLoading());
      setPosition(position + 1);
    }

    return () => {};
  }, [dispatch, isLoading, position, registry, setPosition]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <ECEmailInputField
                label={t('firstName')}
                placeholder={t('enterFirstName')}
                returnKeyLabel="next"
                returnKeyType="next"
                onChangeText={e => onChange(e)}
                onBlur={onBlur}
                onSubmitEditing={() => lastnameRef.current?.focus()}
                error={errors.name?.message}
              />
            )}
            name="name"
          />
        </View>
        <View style={styles.inputs}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <ECEmailInputField
                ref={lastnameRef}
                label={t('lastName')}
                placeholder={t('enterLastName')}
                returnKeyLabel="next"
                returnKeyType="next"
                onChangeText={e => onChange(e)}
                onBlur={onBlur}
                onSubmitEditing={() => emailRef.current?.focus()}
                error={errors.lastname?.message}
              />
            )}
            name="lastname"
          />
        </View>
        <View style={styles.inputs}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <ECEmailInputField
                ref={emailRef}
                label={t('email')}
                placeholder={t('enterEmail')}
                returnKeyLabel="done"
                returnKeyType="done"
                onChangeText={e => onChange(e)}
                onBlur={onBlur}
                onSubmitEditing={() => Keyboard.dismiss()}
                error={errors.email?.message}
              />
            )}
            name="email"
          />
        </View>
        <View style={styles.button}>
          <ECButton
            mode="outlined"
            disabled={!isValid}
            loading={isLoading === 'pending'}
            variant={!isValid ? disabledButton : primaryButtonContained}
            activityIndicatorColor={primaryButtonContained.labelStyle?.color}
            onPress={handleSubmit(onSubmitHandler)}>
            {t('next')}
          </ECButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 6,
  },
  inputs: {
    marginBottom: 20,
  },
  button: {
    paddingTop: 15,
  },
});
