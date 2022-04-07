import {StyleSheet} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../../components/ECText';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

interface SingleProductDescriptionProps {
  title: string;
  description: string;
}

const {singleProductTextColor} = ECOMMERCE_THEME.colors;

export const SingleProductDescription: FunctionComponent<
  SingleProductDescriptionProps
> = ({title, description}) => {
  return (
    <>
      <ECText
        style={styles.title}
        fontSize={26}
        bold
        textColor={singleProductTextColor}>
        {title}
      </ECText>
      <ECText
        style={styles.description}
        fontSize={16}
        textColor={singleProductTextColor}>
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
  },
});
