import React, {FunctionComponent} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Language} from './languages';
import {ECText} from '../../../components/ECText';
import {useAppTheme} from '../../../theme';
import {Divider} from '../../../components/Divider';
import {ECRadioButton} from '../../../components/ECRadioButton';
import {useTranslation} from 'react-i18next';

interface ChangeLanguageItemProps {
  language: Language;
  selectedLanguage: string;
  flag: ImageSourcePropType;
  onLanguageChange: () => void;
}

export const ChangeLanguageItem: FunctionComponent<ChangeLanguageItemProps> = ({
  language: {languageTag, languageLabel},
  selectedLanguage,
  flag,
  onLanguageChange,
}) => {
  const {
    colors: {selectedThemeColor, unselectedThemeColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  const selectedLanguageCondition = languageTag === selectedLanguage;
  return (
    <>
      <TouchableOpacity
        delayPressIn={50}
        delayPressOut={50}
        onPress={onLanguageChange}
        style={styles.row}>
        <>
          <View style={styles.languageLabelContainer}>
            <View>
              <Image source={flag} style={styles.image} />
            </View>
            <ECText
              fontSize={17}
              bold={selectedLanguageCondition}
              textColor={
                selectedLanguageCondition
                  ? selectedThemeColor
                  : unselectedThemeColor
              }>
              {t(languageLabel.toLowerCase())}
            </ECText>
          </View>
          <ECRadioButton isSelected={selectedLanguageCondition} />
        </>
      </TouchableOpacity>
      <View style={styles.divider}>
        <Divider />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  languageLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 15,
    marginRight: 15,
  },
  divider: {paddingHorizontal: 20},
});
