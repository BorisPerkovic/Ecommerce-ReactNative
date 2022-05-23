import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {ECButton} from '../../components/ECButton';
import {ecommerceButtonTheme} from '../../theme/ecommerce/ecommerceButtonTheme';
import {ECEmailInputField} from '../../components/ECEmailInputField';
import {ECPasswordInputField} from '../../components/ECPasswordInputField';
import {RootState} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {signInThunk} from './signInSlice';

type FormData = {
  email: string;
  password: string;
};

const {primaryButtonContained, disabledButton} = ecommerceButtonTheme;
const emailRegex =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignInForm: FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const passwordInputRef = useRef<TextInput>(null);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const isLoading = useSelector((state: RootState) => state.signIn.loading);

  const onSubmitHandler = (data: FormData) => {
    dispatch(signInThunk(data));
  };

  useEffect(() => {
    if (isLoading === 'succeeded') {
      navigate('Home');
    }
    return () => {};
  }, [isLoading, navigate]);

  return (
    <>
      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Email address is required',
            },
            pattern: {
              value: emailRegex,
              message: 'Email must be in valid format',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              label="Email"
              placeholder="Enter Email"
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Password is required',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECPasswordInputField
              label="Password"
              placeholder="Enter Password"
              onChangeText={e => onChange(e)}
              value={value}
              ref={passwordInputRef}
              errorMessage={errors.password?.message}
              onBlur={onBlur}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />
          )}
          name="password"
        />
      </View>
      <View style={styles.buttonWrapper}>
        <ECButton
          labelText="Sign In"
          disabled={!isValid}
          buttonMode={!isValid ? disabledButton : primaryButtonContained}
          labelColor="#FFFFFF"
          onPress={handleSubmit(onSubmitHandler)}
          isLoading={isLoading === 'pending' ? true : false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 24,
  },
  buttonWrapper: {
    marginBottom: 12,
    marginTop: 24,
  },
  forgotPassword: {alignSelf: 'flex-start'},
});
