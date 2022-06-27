import {StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';

interface SingleProductDescriptionProps {
  title: string;
  description: string;
}

export const SingleProductDescription: FunctionComponent<
  SingleProductDescriptionProps
> = ({title, description}) => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  return (
    <>
      <ECText
        style={styles.title}
        fontSize={26}
        bold
        textColor={primaryTextColor}>
        {title}
      </ECText>
      <ECText
        style={styles.description}
        fontSize={16}
        textColor={primaryTextColor}>
        {description}
      </ECText>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
  },
  description: {
    marginBottom: 20,
    fontWeight: '400',
    opacity: 0.6,
    lineHeight: 24,
  },
});
