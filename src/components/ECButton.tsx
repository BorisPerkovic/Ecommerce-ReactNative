import React, {FunctionComponent} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {ButtonVariantStyle} from '../theme/buttonTheme';
import {Button, TouchableRipple} from 'react-native-paper';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ECText} from './ECText';

export interface ButtonProps {
  buttonMode: ButtonVariantStyle;
  labelColor: string;
  labelText: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const {iconRippleColor} = ECOMMERCE_THEME.colors;

export const ECButton: FunctionComponent<ButtonProps> = props => {
  const {
    labelText,
    buttonMode,
    labelColor,
    onPress,
    disabled = false,
    isLoading = false,
  } = props;

  return (
    <>
      <TouchableRipple
        borderless
        rippleColor={iconRippleColor}
        accessibilityRole="button"
        style={styles.container}
        onPress={disabled ? undefined : onPress}>
        <Button
          style={styles.container}
          disabled={disabled}
          uppercase={false}
          contentStyle={[styles.contentStyle, buttonMode.containerStyle]}>
          <ECText
            fontSize={16}
            textColor={labelColor}
            style={styles.labelStyle}>
            {labelText}
          </ECText>
        </Button>
      </TouchableRipple>
      {isLoading ? (
        <ActivityIndicator
          size={'small'}
          color={'white'}
          style={styles.loading}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: '100%',
  },
  contentStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  labelStyle: {
    marginVertical: 0,
    marginHorizontal: 0,
    letterSpacing: 0,
    lineHeight: 24,
  },
  loading: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
});
