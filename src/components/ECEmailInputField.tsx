import React, {forwardRef} from 'react';
import {useTranslation} from 'react-i18next';
import {ReturnKeyTypeOptions, TextInput, TextInputProps} from 'react-native';
import {ECTextField} from './ECTextField';

interface EmailInputFieldProps extends TextInputProps {
  label: string;
  placeholder: string;
  returnKeyType?: ReturnKeyTypeOptions;
  returnKeyLabel?: ReturnKeyTypeOptions;
  error?: string;
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  onBlur: () => void;
}

export const ECEmailInputField = forwardRef<TextInput, EmailInputFieldProps>(
  (props, ref) => {
    const {
      label,
      placeholder,
      error,
      returnKeyType,
      returnKeyLabel,
      onChangeText,
      onSubmitEditing,
      onBlur,
    } = props;
    const {t} = useTranslation('account');
    return (
      <ECTextField
        primaryPlaceholder={placeholder}
        primaryLabel={label}
        returnKeyType={returnKeyType}
        returnKeyLabel={returnKeyLabel}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        ref={ref}
        error={error ? t(error) : ''}
      />
    );
  },
);
