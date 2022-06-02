/* eslint-disable react-native/no-inline-styles */
import {Pressable, StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';

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
  return (
    <Pressable
      style={[
        styles.chip,
        {backgroundColor: isSelected ? '#C2E1F0' : '#f2f2f2'},
      ]}
      onPress={onFilter}>
      <ECText
        textColor={'#004666'}
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
    marginVertical: 5,
    marginRight: 10,
  },
  title: {
    lineHeight: 20,
    margin: 0,
  },
});
