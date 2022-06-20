import {MainTheme} from '../../../theme/themeSlice';

export interface SupportedTheme {
  themeName: string;
  theme: MainTheme;
}

export const supportedThemes: SupportedTheme[] = [
  {
    themeName: 'Light Theme',
    theme: 'LIGHT',
  },
  {
    themeName: 'Dark Theme',
    theme: 'DARK',
  },
];
