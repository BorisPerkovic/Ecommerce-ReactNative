import {ButtonTheme} from '../buttonTheme';
import {ECOMMERCE_THEME} from './ecommerceTheme';

const {
  loginButtonBackgroundColor,
  addToCartButtonColors,
  checkoutButtonBackgroundColor,
} = ECOMMERCE_THEME.colors;

export const ecommerceButtonTheme: ButtonTheme = {
  primaryButtonContained: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: addToCartButtonColors,
    },
  },
  primaryButtonOutlined: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
  },
  secondaryButtonContained: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
  },
  secondaryButtonOutlined: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
  },
  tertiaryButtonContained: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
  },
  tertiaryButtonOutlined: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
  },
  checkoutButton: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: checkoutButtonBackgroundColor,
    },
  },
  loginButton: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: loginButtonBackgroundColor,
    },
  },
};
