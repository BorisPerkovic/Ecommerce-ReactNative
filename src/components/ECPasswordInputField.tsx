import React, {
  forwardRef,
  FunctionComponent,
  useCallback,
  useState,
} from 'react';
import {TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECTextField} from './ECTextField';

interface PasswordInputFieldProps extends TextInputProps {
  label: string;
  placeholder: string;
  error?: string;
  info?: boolean;
  onChangeText: (value: string) => void;
  onSubmitEditing: () => void;
  onBlur: () => void;
}

export const ECPasswordInputField = forwardRef<
  TextInput,
  PasswordInputFieldProps
>((props, ref) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  const {
    label,
    placeholder,
    error,
    onChangeText,
    onSubmitEditing,
    onBlur,
    info = false,
  } = props;
  return (
    <ECTextField
      primaryPlaceholder={placeholder}
      primaryLabel={label}
      onChangeText={onChangeText}
      secureTextEntry={isPasswordHidden}
      ActionComponent={
        <PasswordAction
          isPasswordHidden={isPasswordHidden}
          onAction={togglePasswordVisibility}
        />
      }
      onSubmitEditing={onSubmitEditing}
      onBlur={onBlur}
      info={info}
      ref={ref}
      error={error}
    />
  );
});

const PasswordAction: FunctionComponent<{
  isPasswordHidden: boolean;
  onAction: () => void;
}> = ({isPasswordHidden, onAction}) => {
  return (
    <TouchableOpacity onPress={onAction}>
      <Ionicons
        name={isPasswordHidden ? 'eye-outline' : 'eye-off-outline'}
        color="#A3A8AE"
        size={20}
      />
    </TouchableOpacity>
  );
};
