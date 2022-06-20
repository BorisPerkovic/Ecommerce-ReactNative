import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';

interface EditProfileAvatarProps {
  name: string;
  lastName: string;
}

export const EditProfileAvatar: FunctionComponent<EditProfileAvatarProps> = ({
  name,
  lastName,
}) => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle-o" size={100} color={primaryTextColor} />
      <ECText
        fontSize={24}
        bold
        textColor={primaryTextColor}
        style={styles.text}
        numberOfLines={1}>
        {name}
      </ECText>
      <ECText
        fontSize={24}
        bold
        textColor={primaryTextColor}
        style={styles.text}
        numberOfLines={1}>
        {lastName}
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    lineHeight: 30,
  },
});
