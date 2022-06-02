import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {ECText} from '../../../components/ECText';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {ecommerceButtonTheme} from '../../../theme/ecommerce/ecommerceButtonTheme';
import {ECButton} from '../../../components/button/ECButton';
import {RootState} from '../../../store';
import {passwordSchema} from '../../registration/setSchema';
import {useNavigation} from '@react-navigation/native';
import {ECPasswordInputField} from '../../../components/ECPasswordInputField';
import {changePasswordThunk} from './changePasswordSlice';

interface FormData {
  password: string;
  repassword: string;
}

const changePasswordSchema = yup.object().shape({
  ...passwordSchema,
});

const {primaryButtonContained, disabledButton} = ecommerceButtonTheme;

export const ChangePasswordForm = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const isLoading = useSelector(
    (state: RootState) => state.changePassword.loading,
  );
  const success = useSelector((state: RootState) => state.changePassword.error);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    resolver: yupResolver(changePasswordSchema),
    mode: 'onTouched',
  });

  const repasswordRef = useRef<TextInput>(null);

  const onSubmitHandler = (data: FormData) => {
    const payload = {
      id: user.id,
      password: data.password,
      repassword: data.repassword,
    };

    dispatch(changePasswordThunk(payload));
  };

  useEffect(() => {
    if (isLoading === 'succeeded' && success === 'accept') {
      navigate('ChangePasswordSuccess');
    }
  }, [isLoading, navigate, success]);

  return (
    <View style={styles.container}>
      <View>
        <ECText
          fontSize={17}
          textColor="#004666"
          textAlign="center"
          style={styles.text}>
          Please enter the password you would like to use for your E-commerce
          account in the future.
        </ECText>
        <View style={styles.inputs}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <ECPasswordInputField
                label="Password"
                placeholder="Enter Password"
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
                label="Repeat Password"
                placeholder="Enter Repeat Password"
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
      </View>
      <View style={styles.button}>
        <ECButton
          mode="outlined"
          disabled={!isValid}
          loading={isLoading === 'pending'}
          variant={!isValid ? disabledButton : primaryButtonContained}
          activityIndicatorColor={primaryButtonContained.labelStyle?.color}
          onPress={handleSubmit(onSubmitHandler)}>
          Save
        </ECButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    lineHeight: 24,
    marginBottom: 10,
  },
  inputs: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
});
