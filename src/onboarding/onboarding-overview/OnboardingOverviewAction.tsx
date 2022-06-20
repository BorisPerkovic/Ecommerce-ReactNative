import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ECButton} from '../../components/button/ECButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppTheme} from '../../theme';

interface ButtonsProps {
  replaceTo?: string;
  title: string;
  onBoardingFinished?: () => void;
}

export const OnboardingOverviewAction: FunctionComponent<ButtonsProps> = ({
  replaceTo,
  title,
  onBoardingFinished,
}) => {
  const {
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {replace} = useNavigation<StackNavigationProp<any>>();
  return (
    <ECButton
      mode="outlined"
      variant={primaryButtonContained}
      onPress={() => {
        onBoardingFinished ? onBoardingFinished() : '';
        replaceTo ? replace(replaceTo) : '';
      }}>
      {title}
    </ECButton>
  );
};
