import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ECButton} from '../../components/ECButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {ecommerceButtonTheme} from '../../theme/ecommerce/ecommerceButtonTheme';

interface ButtonsProps {
  replaceTo?: string;
  title: string;
  onBoardingFinished?: () => void;
}

const {primaryButtonContained} = ecommerceButtonTheme;

export const OnboardingOverviewAction: FunctionComponent<ButtonsProps> = ({
  replaceTo,
  title,
  onBoardingFinished,
}) => {
  const {replace} = useNavigation<StackNavigationProp<any>>();
  return (
    <ECButton
      labelColor="#FFFFFF"
      labelText={title}
      buttonMode={primaryButtonContained}
      onPress={() => {
        onBoardingFinished ? onBoardingFinished() : '';
        replaceTo ? replace(replaceTo) : '';
      }}
    />
  );
};
