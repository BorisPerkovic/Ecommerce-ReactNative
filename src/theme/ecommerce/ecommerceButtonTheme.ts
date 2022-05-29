import {ButtonTheme} from '../buttonTheme';
import {ECOMMERCE_THEME} from './ecommerceTheme';

const {
  loginButtonBackgroundColor,
  addToCartButtonColors,
  checkoutButtonBackgroundColor,
  disabledButtonBackgroundColor,
  loginButtonTextColor,
} = ECOMMERCE_THEME.colors;

export const ecommerceButtonTheme: ButtonTheme = {
  primaryButtonContained: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: addToCartButtonColors,
    },
    labelStyle: {
      color: 'white',
    },
  },
  primaryButtonOutlined: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#004666',
      backgroundColor: 'transparent',
    },
    labelStyle: {
      color: '#004666',
    },
  },
  secondaryButtonContained: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
    labelStyle: {
      color: 'white',
    },
  },
  secondaryButtonOutlined: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
    labelStyle: {
      color: 'white',
    },
  },
  tertiaryButtonContained: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
    labelStyle: {
      color: 'white',
    },
  },
  tertiaryButtonOutlined: {
    containerStyle: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#cccccc',
    },
    labelStyle: {
      color: 'white',
    },
  },
  checkoutButton: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: checkoutButtonBackgroundColor,
    },
    labelStyle: {
      color: 'white',
    },
  },
  loginButton: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: loginButtonBackgroundColor,
    },
    labelStyle: {
      color: loginButtonTextColor,
    },
  },
  logoutButton: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: 'black',
    },
    labelStyle: {
      color: 'white',
    },
  },
  disabledButton: {
    containerStyle: {
      borderRadius: 12,
      backgroundColor: disabledButtonBackgroundColor,
    },
    labelStyle: {
      color: 'white',
    },
  },
};
