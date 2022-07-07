import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';

interface OnboardingOverviewItemProps {
  label: string;
}

export const OnboardingOverviewItem: FunctionComponent<
  OnboardingOverviewItemProps
> = ({label, children}) => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  return (
    <View style={styles.container}>
      <ECText
        bold
        fontSize={30}
        textColor={primaryTextColor}
        textAlign="center"
        style={styles.count}>
        {label}
      </ECText>
      <ECText
        fontSize={Dimensions.get('window').height < 800 ? 16 : 18}
        textAlign="center"
        textColor={primaryTextColor}
        style={styles.description}>
        {children}
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  count: {lineHeight: Dimensions.get('window').height < 800 ? 36 : 52},
  description: {
    lineHeight: Dimensions.get('window').height < 800 ? 24 : 28,
  },
});
