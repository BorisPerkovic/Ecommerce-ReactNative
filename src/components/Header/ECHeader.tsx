/* eslint-disable react-native/no-inline-styles */
import {Alert, StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import {ECText} from '../ECText';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

interface ECHeaderProps {
  title: string;
  discard?: boolean;
}

export const ECHeader: FunctionComponent<ECHeaderProps> = ({
  title,
  discard = false,
}) => {
  const {goBack} = useNavigation();

  const onPressHandler = () => {
    if (discard) {
      Alert.alert(
        'Discard',
        'You may have some changes that are not saved. Are you sure you want to go back?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'YES',
            onPress: () => goBack(),
          },
        ],
      );
    } else {
      goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconButton
          icon="chevron-left"
          rippleColor="rgba(0, 17, 26, 0.6)"
          size={40}
          color={'#004666'}
          onPress={onPressHandler}
        />
      </View>
      <View style={styles.title}>
        <ECText textAlign="center" textColor={'black'} bold fontSize={25}>
          {title}
        </ECText>
      </View>
      <View style={{width: '25%'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  icon: {margin: 0},
  iconContainer: {
    flexBasis: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  title: {
    flexBasis: '80%',
  },
});
