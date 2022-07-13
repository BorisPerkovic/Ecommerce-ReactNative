import {ImageProps} from 'react-native';

const reactNative = require('../../assets/images/react_native_logo.png');
const redux = require('../../assets/images/redux_logo.png');
const reactHookForm = require('../../assets/images/react_hook_form.png');
const i18Next = require('../../assets/images/react_i18n.png');
const paper = require('../../assets/images/react_native_paper.png');
const typescript = require('../../assets/images/typescript.png');

export interface Partners {
  logo: ImageProps;
}

export const partners: Partners[] = [
  {
    logo: reactNative,
  },
  {
    logo: typescript,
  },
  {
    logo: redux,
  },
  {
    logo: reactHookForm,
  },
  {
    logo: i18Next,
  },
  {
    logo: paper,
  },
];
