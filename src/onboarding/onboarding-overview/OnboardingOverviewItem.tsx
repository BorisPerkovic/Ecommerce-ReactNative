import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';

interface OnboardingOverviewItemProps {
  itemOverviewCount: number;
}

export const OnboardingOverviewItem: FunctionComponent<
  OnboardingOverviewItemProps
> = ({itemOverviewCount, children}) => {
  return (
    <View style={styles.container}>
      <Text
        bold
        fontSize={BREAKPOINTS.SMALL_DEVICE ? 30 : 40}
        textColor={activePrimary}
        textAlign="center"
        style={styles.count}>
        {formatNumber(itemOverviewCount)}+
      </Text>
      <Text
        fontSize={BREAKPOINTS.SMALL_DEVICE ? 16 : 18}
        textAlign="center"
        style={[...styles.description, text]}>
        {children}
      </Text>
    </View>
  );
};

const formatNumber = (number: number) => {
  /* A workaround since number.toLocaleString() doesn't work on android */
  const thousandsSeparatorRegex = /\B(?=(\d{3})+(?!\d))/g;
  return number.toString().replace(thousandsSeparatorRegex, '.');
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  count: {lineHeight: Dimensions.get('window').height < 800 ? 36 : 52},
  description: {
    lineHeight: Dimensions.get('window').height < 800 ? 24 : 28,
    width: '85%',
    alignSelf: 'center',
  },
  text: {
    fontSize: Dimensions.get('window').height < 800 ? 16 : 18,
    textAlign: 'center',
  },
});
