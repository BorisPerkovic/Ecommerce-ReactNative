import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ECText} from '../../components/ECText';

interface EditProfileAvatarProps {
  name: string;
  lastName: string;
}

export const EditProfileAvatar: FunctionComponent<EditProfileAvatarProps> = ({
  name,
  lastName,
}) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="user-circle-o" size={120} color="#004666" />
      <ECText
        fontSize={24}
        bold
        textColor="#004666"
        style={styles.text}
        numberOfLines={1}>
        {name}
      </ECText>
      <ECText
        fontSize={24}
        bold
        textColor="#004666"
        style={styles.text}
        numberOfLines={1}>
        {lastName}
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    lineHeight: 32,
  },
});
