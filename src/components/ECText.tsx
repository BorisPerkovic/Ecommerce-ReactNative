/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent, PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';

export interface ECText extends TextProps {
  bold?: boolean;
  textColor?: string;
  children?: any;
  fontSize: number;
  textAlign?: 'right' | 'center' | 'left' | 'auto' | 'justify';
  passive?: boolean;
}

export const ECText: FunctionComponent<ECText> = (
  props: PropsWithChildren<ECText>,
) => {
  const {
    style: customStyle,
    bold,
    children,
    fontSize,
    textColor = '#ffffff',
    textAlign,
    passive,
  } = props;

  const fontFamily: string = bold ? 'bold' : 'regular';

  return (
    <Text
      {...props}
      style={[
        customStyle,
        {
          fontFamily,
          fontSize,
          color: passive ? '#a8adb3' : textColor,
          textAlign,
        },
      ]}>
      {children}
    </Text>
  );
};
