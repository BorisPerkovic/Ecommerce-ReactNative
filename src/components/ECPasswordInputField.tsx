/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {ECText} from './ECText';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ECPasswordInputFieldProps extends TextInputProps {
  label: string;
  placeholder: string;
  errorMessage?: string;
  value: string;
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  onBlur: () => void;
}

export const ECPasswordInputField = forwardRef<
  TextInput,
  ECPasswordInputFieldProps
>((props, ref) => {
  const {
    label,
    placeholder,
    errorMessage,
    value,
    onChangeText,
    onSubmitEditing,
    onBlur,
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  return (
    <>
      <ECText fontSize={15} textColor="#004666" style={styles.label}>
        {label}
      </ECText>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.input,
          {
            borderColor: errorMessage
              ? '#EC3654'
              : isFocused
              ? '#004666'
              : '#A3A8AE',
          },
        ]}
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => setIsFocused(false)}
      />
      <View style={styles.eyeIcon}>
        <Ionicons
          name={isPassword ? 'eye-outline' : 'eye-off-outline'}
          size={22}
          color="#A3A8AE"
          onPress={() => setIsPassword(!isPassword)}
        />
      </View>
      {errorMessage ? (
        <ECText fontSize={12} textColor="#EC3654">
          {errorMessage}
        </ECText>
      ) : null}
    </>
  );
});

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderRadius: 7,
    borderWidth: 1,
    color: '#004666',
    fontSize: 15,
    lineHeight: 24,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  label: {
    marginLeft: 5,
    marginBottom: 2,
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 39,
  },
});
