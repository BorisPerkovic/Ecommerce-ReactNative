import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {ButtonVariantStyle} from '../theme/buttonTheme';
import {Button, TouchableRipple} from 'react-native-paper';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ECText} from './ECText';

export interface ButtonProps {
  buttonMode: ButtonVariantStyle;
  labelColor: string;
  labelText: string;
  onPress: () => void;
}

const {iconRippleColor} = ECOMMERCE_THEME.colors;

export const ECButton: FunctionComponent<ButtonProps> = props => {
  const {labelText, buttonMode, labelColor, onPress} = props;

  return (
    <TouchableRipple
      borderless
      rippleColor={iconRippleColor}
      accessibilityRole="button"
      style={styles.container}
      onPress={onPress}>
      <Button
        style={styles.container}
        uppercase={false}
        contentStyle={[styles.contentStyle, buttonMode.containerStyle]}>
        <ECText fontSize={16} textColor={labelColor} style={styles.labelStyle}>
          {labelText}
        </ECText>
      </Button>
    </TouchableRipple>
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
});
