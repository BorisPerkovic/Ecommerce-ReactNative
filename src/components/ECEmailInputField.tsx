/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TextInput, TextInputProps, Platform} from 'react-native';
import React, {forwardRef, useState} from 'react';
import {ECText} from './ECText';

interface ECEmailInputFieldProps extends TextInputProps {
  label: string;
  placeholder: string;
  errorMessage?: string;
  value: string;
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  onBlur: () => void;
}

export const ECEmailInputField = forwardRef<TextInput, ECEmailInputFieldProps>(
  (props, ref) => {
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
          secureTextEntry={false}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onBlur={onBlur}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          blurOnSubmit={false}
        />
        {errorMessage ? (
          <ECText fontSize={12} textColor="#EC3654">
            {errorMessage}
          </ECText>
        ) : null}
      </>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    height: Platform.OS === 'android' ? 55 : 60,
    borderRadius: 7,
    borderWidth: 1,
    color: '#004666',
    fontSize: 15,
    lineHeight: 24,
    paddingVertical: 15,
    paddingTop: Platform.OS === 'android' ? 15 : 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  label: {
    marginLeft: 5,
    marginBottom: 2,
  },
});
