import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';

interface FilterSectionProps {
  title: string;
}

export const FiltersSection: FunctionComponent<FilterSectionProps> = ({
  title,
  children,
}) => {
  const {
    colors: {primaryTextColor, divideColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {borderBottomColor: divideColor}]}>
      <ECText
        fontSize={18}
        bold
        textColor={primaryTextColor}
        style={styles.title}>
        {title}
      </ECText>
      <View style={styles.contentWrapper}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  contentWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    lineHeight: 28,
    marginBottom: 15,
  },
});
