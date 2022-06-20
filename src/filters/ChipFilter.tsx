import {Pressable, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';

interface ChipFilterProps {
  title: string;
  isSelected: boolean;
  onFilter: () => void;
}

export const ChipFilter: FunctionComponent<ChipFilterProps> = ({
  title,
  isSelected,
  onFilter,
}) => {
  const {
    colors: {
      selectedChipBackroundColor,
      unselectedChipbackgroundColor,
      chipText,
    },
  } = useAppTheme();
  return (
    <Pressable
      style={[
        styles.chip,
        {
          backgroundColor: isSelected
            ? selectedChipBackroundColor
            : unselectedChipbackgroundColor,
        },
      ]}
      onPress={onFilter}>
      <ECText
        textColor={chipText}
        fontSize={13}
        textAlign="center"
        bold
        style={styles.title}>
        {title}
      </ECText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    lineHeight: 20,
    margin: 0,
  },
});
