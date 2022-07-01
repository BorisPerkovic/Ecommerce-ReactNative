import {Keyboard, Platform, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FeedbackTitle} from './FeedbackTitle';
import {FeedbackRatingStars} from './FeedbackRatingStars';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useAppTheme} from '../theme';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/button/ECButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {appFeedbackThunk} from './appFeedbackSlice';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const commentSchema = {
  comment: yup
    .string()
    .trim()
    .required('commentRequired')
    .max(6000, 'maxNumbers'),
};

const createCommentPasswordSchema = yup.object().shape({
  ...commentSchema,
});

interface FormData {
  comment: string;
}

export const FeedbackForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const {
    colors: {
      errorBorderInputField,
      errorInputText,
      focusedInputField,
      unFocusedInputField,
      primaryTextColor,
      placeholderTextColor,
      selectionCursorColor,
    },
    buttons: {primaryButtonContained, disabledButton},
  } = useAppTheme();
  const {t} = useTranslation('account');
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const isLoading = useSelector(
    (state: RootState) => state.appFeedback.loading,
  );

  const {
    handleSubmit,
    control,
    formState: {isValid, errors},
  } = useForm<FormData>({
    resolver: yupResolver(createCommentPasswordSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data: FormData) => {
    dispatch(
      appFeedbackThunk({
        users_id: +user.id,
        ratings: rating,
        comment: data.comment,
      }),
    );
  };

  const canSaveReview = rating !== 0 && isValid;

  useEffect(() => {
    if (isLoading === 'succeeded') {
      navigate('FeedbackSuccess');
    }

    return () => {};
  }, [isLoading, navigate]);

  return (
    <>
      <KeyboardAwareScrollView
        enableOnAndroid
        showsVerticalScrollIndicator={false}
        bounces={false}
        extraScrollHeight={32}
        extraHeight={Platform.OS === 'ios' ? 130 : 0}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.containerContent}>
        <FeedbackTitle />
        <FeedbackRatingStars
          onRatingChange={rate => {
            setRating(rate);
          }}
          initialRating={0}
        />
        <View style={styles.inputWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur}}) => (
              <TextInput
                placeholder={t('appFeedbackPlaceholder')}
                placeholderTextColor={placeholderTextColor}
                selectionColor={selectionCursorColor}
                returnKeyLabel="done"
                returnKeyType="done"
                onChangeText={e => onChange(e)}
                onBlur={() => {
                  onBlur();
                  setIsFocused(!isFocused);
                }}
                onFocus={() => setIsFocused(!isFocused)}
                onSubmitEditing={() => Keyboard.dismiss()}
                multiline
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    borderColor: errors.comment?.message
                      ? errorBorderInputField
                      : isFocused
                      ? focusedInputField
                      : unFocusedInputField,
                    color: primaryTextColor,
                  },
                ]}
              />
            )}
            name="comment"
          />
          {errors.comment?.message ? (
            <ECText
              style={styles.error}
              fontSize={12}
              textColor={errorInputText}>
              {t(errors.comment?.message)}
            </ECText>
          ) : null}
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.button}>
        <ECButton
          mode="outlined"
          loading={isLoading === 'pending'}
          disabled={!canSaveReview}
          variant={!canSaveReview ? disabledButton : primaryButtonContained}
          onPress={handleSubmit(onSubmit)}>
          {t('saveReview')}
        </ECButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    flexGrow: 1,
    paddingHorizontal: 5,
  },
  inputWrapper: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  textInput: {
    textAlignVertical: 'top',
    height: 145,
    borderWidth: 1,
    borderRadius: 10,
    padding: 18,
    paddingTop: 18,
    fontSize: 18,
  },
  error: {
    lineHeight: 18,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 10,
  },
});
