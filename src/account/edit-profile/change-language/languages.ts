import {ImageSourcePropType} from 'react-native';

const englishFlag = require('../../../../assets/images/english.png');
const germanFlag = require('../../../../assets/images/german.png');
const italyFlag = require('../../../../assets/images/italy.png');
const spanishFlag = require('../../../../assets/images/spanish.png');

export interface Language {
  languageLabel: string;
  languageTag: string;
  flag: ImageSourcePropType;
}

export const languages: Language[] = [
  {
    languageTag: 'en',
    languageLabel: 'English',
    flag: englishFlag,
  },
  {
    languageTag: 'de',
    languageLabel: 'German',
    flag: germanFlag,
  },
  {
    languageTag: 'it',
    languageLabel: 'Italy',
    flag: italyFlag,
  },
  {
    languageTag: 'es',
    languageLabel: 'Spain',
    flag: spanishFlag,
  },
];
