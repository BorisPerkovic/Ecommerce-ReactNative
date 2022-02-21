/* eslint-disable prettier/prettier */
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
    textColor,
    textAlign,
  } = props;

  // eslint-disable-next-line quotes
  const fontWeight = bold ? '700' : '400';

  return (
    <Text
      {...props}
      style={[
        customStyle,
        {
          fontWeight: fontWeight,
          fontSize,
          color: textColor,
          textAlign,
        },
      ]}>
      {children}
    </Text>
  );
};
