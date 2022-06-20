import React, {FunctionComponent, PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';
import {useAppTheme} from '../theme';

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
    colors: {primaryTextColor},
  } = useAppTheme();
  const {
    style: customStyle,
    bold,
    children,
    fontSize,
    textColor,
    textAlign,
  } = props;

  const fontWeight = bold ? '700' : '400';

  return (
    <Text
      {...props}
      style={[
        customStyle,
        {
          fontWeight: fontWeight,
          fontSize,
          color: textColor ? textColor : primaryTextColor,
          textAlign,
        },
      ]}>
      {children}
    </Text>
  );
};
