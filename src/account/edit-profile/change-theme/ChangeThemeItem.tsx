import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SupportedTheme} from './supportedThemes';
import {ECText} from '../../../components/ECText';
import {useAppTheme} from '../../../theme';
import {Divider} from '../../../components/Divider';
import {ECRadioButton} from '../../../components/ECRadioButton';

interface ChangeThemeItemProps {
  theme: SupportedTheme;
  selectedTheme: string;
  onThemeSelect: (themeName: string) => void;
}

export const ChangeThemeItem: FunctionComponent<ChangeThemeItemProps> = ({
  theme: {themeName, theme},
  selectedTheme,
  onThemeSelect,
}) => {
  const {
    colors: {selectedThemeColor, unselectedThemeColor},
  } = useAppTheme();
  const selectedthemeCondition = selectedTheme === theme;
  return (
    <>
      <TouchableOpacity
        delayPressIn={50}
        delayPressOut={50}
        onPress={() => onThemeSelect(theme)}
        style={styles.row}>
        <>
          <View style={styles.themeLabelContainer}>
            <ECText
              fontSize={17}
              bold={selectedthemeCondition}
              textColor={
                selectedthemeCondition
                  ? selectedThemeColor
                  : unselectedThemeColor
              }>
              {themeName}
            </ECText>
          </View>
          <ECRadioButton isSelected={selectedthemeCondition} />
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  themeLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {paddingHorizontal: 20},
});
