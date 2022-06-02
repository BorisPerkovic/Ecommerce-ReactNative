import {Keyboard, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ECText} from '../../../components/ECText';
import {Controller, useForm} from 'react-hook-form';
import {ECEmailInputField} from '../../../components/ECEmailInputField';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {ecommerceButtonTheme} from '../../../theme/ecommerce/ecommerceButtonTheme';
import {ECButton} from '../../../components/button/ECButton';
import {changeEmailThunk} from './changeEmailSlice';
import {RootState} from '../../../store';
import {useNavigation} from '@react-navigation/native';

interface FormData {
  email: string;
}

const emailSchema = {
  email: yup
    .string()
    .trim()
    .required('email is required')
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'email must be in valid format',
    ),
};

const changeEmailSchema = yup.object().shape({
  ...emailSchema,
});

const {primaryButtonContained, disabledButton} = ecommerceButtonTheme;

export const ChangeEMailForm = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const isLoading = useSelector(
    (state: RootState) => state.changeEmail.loading,
  );
  const success = useSelector((state: RootState) => state.changeEmail.error);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    resolver: yupResolver(changeEmailSchema),
    mode: 'onTouched',
  });

  const onSubmitHandler = (data: FormData) => {
    const payload = {
      id: user.id,
      email: data.email,
    };
    dispatch(changeEmailThunk(payload));
  };

  useEffect(() => {
    if (isLoading === 'succeeded' && success === 'accept') {
      navigate('ChangeEmailSuccess');
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
          Please enter the e-mail address you would like to use for your
          E-commerce account in the future.
        </ECText>
        <View style={styles.input}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <ECEmailInputField
                label="Set new e-mail address"
                placeholder="Enter New Email Address"
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
  },
  input: {
    marginTop: 20,
  },
  button: {
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
});
