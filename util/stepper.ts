import {useAppTheme} from '../src/theme';

export const OrderLabels = ['User', 'Location', 'Items'];
export const RegistrationLabels = ['User', 'Set Password', 'Success'];
export const useCustomStyles = () => {
  const {
    colors: {
      backgroundColor,
      stepperCurrentColor,
      stepperCurrentTextColor,
      stepperUnfinishedColor,
      stepperUnfinishedTextColor,
    },
  } = useAppTheme();
  const customStyles = {
    stepIndicatorSize: 50,
    currentStepIndicatorSize: 60,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeCurrentColor: stepperCurrentColor,
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: stepperCurrentColor,
    stepStrokeUnFinishedColor: stepperCurrentColor,
    separatorFinishedColor: stepperCurrentColor,
    separatorUnFinishedColor: stepperUnfinishedTextColor,
    stepIndicatorFinishedColor: stepperCurrentColor,
    stepIndicatorUnFinishedColor: stepperUnfinishedColor,
    stepIndicatorCurrentColor: stepperCurrentColor,
    stepIndicatorLabelFontSize: 16,
    currentStepIndicatorLabelFontSize: 16,
    stepIndicatorLabelCurrentColor: backgroundColor,
    stepIndicatorLabelFinishedColor: stepperUnfinishedColor,
    stepIndicatorLabelUnFinishedColor: stepperCurrentColor,
    labelColor: stepperUnfinishedTextColor,
    labelSize: 14,
    currentStepLabelColor: stepperCurrentTextColor,
  };
  return customStyles;
};
