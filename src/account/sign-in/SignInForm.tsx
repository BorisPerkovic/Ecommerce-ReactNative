import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {FunctionComponent, useEffect, useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {ECButton} from '../../components/button/ECButton';
import {ECEmailInputField} from '../../components/ECEmailInputField';
import {ECPasswordInputField} from '../../components/ECPasswordInputField';
import {RootState} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {signInThunk} from './signInSlice';
import {yupResolver} from '@hookform/resolvers/yup';
import {setSignInEmailSchema} from '../registration/setSchema';
import {useAppTheme} from '../../theme';

type FormData = {
  email: string;
  password: string;
};

export const SignInForm: FunctionComponent = () => {
  const {
    buttons: {primaryButtonContained, disabledButton},
  } = useAppTheme();
  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    resolver: yupResolver(setSignInEmailSchema),
    mode: 'onTouched',
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
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECEmailInputField
              label="Email"
              placeholder="Enter Email"
              returnKeyLabel="next"
              returnKeyType="next"
              onChangeText={e => onChange(e)}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              error={errors.email?.message}
            />
          )}
          name="email"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <ECPasswordInputField
              label="Password"
              placeholder="Enter Password"
              returnKeyLabel="done"
              returnKeyType="done"
              onChangeText={e => onChange(e)}
              value={value}
              ref={passwordInputRef}
              error={errors.password?.message}
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
          mode="outlined"
          disabled={!isValid}
          variant={!isValid ? disabledButton : primaryButtonContained}
          onPress={handleSubmit(onSubmitHandler)}
          loading={isLoading === 'pending'}>
          Next
        </ECButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    marginBottom: 12,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  forgotPassword: {alignSelf: 'flex-start'},
});
