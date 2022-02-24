import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ECButton} from '../../components/ECButton';
import {StackNavigationProp} from '@react-navigation/stack';

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
  const {replace} = useNavigation<StackNavigationProp<any>>();
  return (
    <ECButton
      buttonMode="contained"
      contentColor="#004666"
      onPress={() => {
        onBoardingFinished ? onBoardingFinished() : '';
        replaceTo ? replace(replaceTo) : '';
      }}>
      {title}
    </ECButton>
  );
};
