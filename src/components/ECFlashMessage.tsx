import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  hideMessage,
  MessageComponentProps,
  MessageType,
} from 'react-native-flash-message';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {ECText} from './ECText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

const {
  flashMessageDangerBackgroundColors,
  flashMessageInfoBackgroundColors,
  flashMessageSuccessBackgroundColors,
  flashMessageTextColor,
  flashMessageWarningBackgroundColors,
  white,
} = ECOMMERCE_THEME.colors;

type FlashMessageColorModel = {[key in MessageType]: string};

export const ECFlashMessage: FunctionComponent<
  MessageComponentProps
> = props => {
  const {
    message: {message, type},
  } = props;

  const flashMessageIcons: Record<MessageType, Element> = {
    none: () => null,
    default: () => null,
    info: (
      <Ionicons
        name="information-circle-outline"
        size={32}
        color={flashMessageTextColor}
      />
    ),
    danger: <Octicons name="stop" size={32} color={flashMessageTextColor} />,
    success: (
      <Ionicons
        name="ios-checkmark-circle-outline"
        size={32}
        color={flashMessageTextColor}
      />
    ),
    warning: (
      <Ionicons
        name="warning-outline"
        size={32}
        color={flashMessageTextColor}
      />
    ),
  };

  const flashMessageBackgroundColors: FlashMessageColorModel = {
    none: white,
    default: white,
    info: flashMessageInfoBackgroundColors,
    success: flashMessageSuccessBackgroundColors,
    danger: flashMessageDangerBackgroundColors,
    warning: flashMessageWarningBackgroundColors,
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            type && flashMessageBackgroundColors[type as MessageType],
        },
      ]}>
      {flashMessageIcons[type as MessageType]}
      <ECText
        fontSize={13}
        textColor={flashMessageTextColor}
        style={styles.message}>
        {message}
      </ECText>
      <TouchableOpacity onPress={() => hideMessage()} style={styles.dismiss}>
        <ECText bold fontSize={15} textColor={flashMessageTextColor}>
          OK
        </ECText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  message: {flex: 1, marginLeft: 10, marginRight: 27, lineHeight: 20},
  dismiss: {
    width: 75,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
});
