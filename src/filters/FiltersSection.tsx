import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../components/ECText';

interface FilterSectionProps {
  title: string;
}

export const FiltersSection: FunctionComponent<FilterSectionProps> = ({
  title,
  children,
}) => {
  return (
    <View style={styles.container}>
      <ECText fontSize={18} bold textColor="#4B5357" style={styles.title}>
        {title}
      </ECText>
      <View style={styles.contentWrapper}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: '#F2F2F2',
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
