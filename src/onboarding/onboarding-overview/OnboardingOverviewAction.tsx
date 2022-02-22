import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ECButton} from '../../components/ECButton';

interface ButtonsProps {
  replaceTo: string;
  title: string;
}

export const OnboardingOverviewAction: FunctionComponent<ButtonsProps> = ({
  replaceTo,
  title,
}) => {
  const {replace} = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <ECButton
      buttonMode="contained"
      contentColor="#004666"
      onPress={() => {
        replace(replaceTo);
      }}>
      {title}
    </ECButton>
  );
};
