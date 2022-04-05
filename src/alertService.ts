import {showMessage, MessageType} from 'react-native-flash-message';

const alert = (
  alertType: MessageType,
  messageKey: string,
  duration: number = 6000,
) => {
  return showMessage({
    message: messageKey,
    type: alertType,
    duration,
  });
};

export const alertService = {
  alert,
};
