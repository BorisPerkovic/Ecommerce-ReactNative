/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../../components/ECText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '../../components/Divider';
import {useAppTheme} from '../../theme';

interface EditProfileItemProps {
  label: string;
  value: string;
  navigateTo: string;
  icon: string;
}

export const EditProfileItem: FunctionComponent<EditProfileItemProps> = ({
  label,
  value,
  navigateTo,
  icon,
}) => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const {navigate} = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <ECText fontSize={15} textColor={primaryTextColor} style={styles.label}>
          {label}
        </ECText>
        <TouchableOpacity
          onPress={() => {
            navigate(navigateTo);
          }}>
          <View style={styles.wrapper}>
            <ECText
              fontSize={15}
              textColor={primaryTextColor}
              bold
              style={styles.value}>
              {value}
            </ECText>
            <Ionicons
              name={icon}
              size={25}
              color={primaryTextColor}
              style={{marginRight: 10}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  label: {
    lineHeight: 24,
    marginBottom: 5,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    lineHeight: 24,
  },
});
