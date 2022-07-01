import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {ECButton} from '../../components/button/ECButton';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {passwordSchema} from './setSchema';
import {registerUserThunk} from './registrationSlice';
import config from '../../../config';
import {ECPasswordInputField} from '../../components/ECPasswordInputField';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

interface RegistrationUserPasswordProps {
  position: number;
  setPosition: (num: number) => void;
}

interface FormData {
  password: string;
  repassword: string;
}

const createAccountPasswordSchema = yup.object().shape({
  ...passwordSchema,
});

export const RegistrationUserPassword: FunctionComponent<
  RegistrationUserPasswordProps
> = ({position, setPosition}) => {
  const {
    buttons: {primaryButtonContained, disabledButton},
  } = useAppTheme();
  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    resolver: yupResolver(createAccountPasswordSchema),
    mode: 'onTouched',
  });
  const {t} = useTranslation('account');

  const isLoading = useSelector(
    (state: RootState) => state.registration.loading,
  );
  const registry = useSelector((state: RootState) => state.registration.error);
  const user = useSelector((state: RootState) => state.registration.user);

  const dispatch = useDispatch();

  const onSubmitHandler = async (form: FormData) => {
    const data = {
      ...user,
      password: form.password,
      repassword: form.repassword,
    };
    await dispatch(registerUserThunk({url: config.REGISTRATION, data}));
  };

  const repasswordRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isLoading === 'succeeded' && registry === 'accept') {
      setPosition(position + 1);
    }

    return () => {};
  }, [isLoading, position, registry, setPosition]);

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur}}) => (
            <ECPasswordInputField
              label={t('password')}
              placeholder={t('enterPassword')}
              returnKeyLabel="next"
              returnKeyType="next"
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              info={true}
              onSubmitEditing={() => repasswordRef.current?.focus()}
              error={errors.password?.message}
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.inputs}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur}}) => (
            <ECPasswordInputField
              ref={repasswordRef}
              label={t('repeatPassword')}
              placeholder={t('enterRepeatPassword')}
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              returnKeyLabel="done"
              returnKeyType="done"
              onSubmitEditing={() => Keyboard.dismiss()}
              error={errors.repassword?.message}
            />
          )}
          name="repassword"
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
