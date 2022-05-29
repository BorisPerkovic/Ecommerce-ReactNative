import {StyleProp, ViewStyle} from 'react-native';

type ButtonVariant =
  | 'primaryButtonContained'
  | 'primaryButtonOutlined'
  | 'secondaryButtonContained'
  | 'secondaryButtonOutlined'
  | 'tertiaryButtonContained'
  | 'tertiaryButtonOutlined'
  | 'loginButton'
  | 'logoutButton'
  | 'checkoutButton'
  | 'disabledButton';

export type ButtonTheme = {
  [variant in ButtonVariant]: ButtonVariantStyle;
};

export interface ButtonVariantStyle {
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: LabelSTyle;
}

interface LabelSTyle {
  color: string;
}
