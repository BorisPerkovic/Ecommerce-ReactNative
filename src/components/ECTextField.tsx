/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef, FunctionComponent, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Alert,
  ReturnKeyTypeOptions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from './ECText';

interface ECTextFieldProps extends TextInputProps {
  ActionComponent?: React.ReactNode;
  primaryLabel: string;
  returnKeyType?: ReturnKeyTypeOptions;
  returnKeyLabel?: ReturnKeyTypeOptions;
  isRequired?: boolean;
  info?: boolean;
  primaryPlaceholder: string;
  error?: string;
}

export const ECTextField = forwardRef<TextInput, ECTextFieldProps>(
  (props, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const currentInputRef = useRef('');
    const {
      primaryLabel,
      returnKeyType = 'next',
      returnKeyLabel = 'next',
      ActionComponent,
      info,
      primaryPlaceholder,
      error,
      onFocus,
      onBlur,
    } = props;

    const paddingRight = ActionComponent ? 70 : 16;

    return (
      <View>
        <View style={styles.labelContainer}>
          <View style={styles.primaryLabel}>
            <ECText fontSize={14} textColor={error ? '#EC3654' : '#004666'}>
              {primaryLabel}
            </ECText>
            {info ? (
              <ECTextFieldInfo color={error ? '#EC3654' : '#004666'} />
            ) : null}
          </View>
        </View>
        <View>
          <TextInput
            placeholder={primaryPlaceholder}
            style={[
              styles.input,
              {
                borderColor: error
                  ? '#EC3654'
                  : isFocused
                  ? '#004666'
                  : '#A3A8AE',
                paddingRight,
              },
            ]}
            returnKeyLabel={returnKeyLabel}
            returnKeyType={returnKeyType}
            ref={ref}
            blurOnSubmit={false}
            autoCapitalize="none"
            {...props}
            onChangeText={text => {
              currentInputRef.current = text;
              props.onChangeText?.(text);
            }}
            onFocus={e => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={e => {
              setIsFocused(false);
              onBlur?.(e);
            }}
          />
          {ActionComponent ? (
            <View style={styles.iconWrapper}>{ActionComponent}</View>
          ) : null}
          {error ? (
            <ECText style={styles.error} fontSize={11} textColor={'#EC3654'}>
              {error}
            </ECText>
          ) : null}
        </View>
      </View>
    );
  },
);

interface ECTextFieldInfoProps {
  color: string;
}

export const ECTextFieldInfo: FunctionComponent<ECTextFieldInfoProps> = ({
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(
          'Password requirements',
          'At least 8 characters\nAt least one lower case letter\nAt least one upper case letter\nAt least one number or special character',
        );
      }}>
      <Ionicons name="information-circle-outline" color={color} size={18} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  input: {
    height: 56,
    fontSize: 18,
    color: '#004666',
    paddingLeft: 16,
    borderWidth: 1,
    borderRadius: 7,
  },
  iconWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 18,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 50,
  },
  primaryLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    lineHeight: 18,
    position: 'absolute',
    top: '100%',
  },
});
