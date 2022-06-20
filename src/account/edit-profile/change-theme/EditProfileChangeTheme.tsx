import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import {MyStatusBar} from '../../../components/ECStatusBar';
import {useAppTheme} from '../../../theme';
import {SupportedTheme, supportedThemes} from './supportedThemes';
import {ChangeThemeItem} from './ChangeThemeItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {changeTheme} from '../../../theme/themeSlice';
import {ECHeader} from '../../../components/Header/ECHeader';

export const EditProfileChangeTheme = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const theme = useSelector((state: RootState) => state.theme.appTheme);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const handleThemeChange = useCallback(
    (value: string) => {
      dispatch(changeTheme(value));
      if (value !== theme) {
        navigation.goBack();
      }
    },
    [theme, dispatch, navigation],
  );

  return (
    <>
      <MyStatusBar />
      <ECHeader screenTitle="Change Theme" />
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <ScrollView bounces={false}>
          {supportedThemes.map((supportedTheme: SupportedTheme) => {
            return (
              <View key={supportedTheme.theme}>
                <ChangeThemeItem
                  theme={supportedTheme}
                  selectedTheme={theme}
                  onThemeSelect={handleThemeChange}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingBottom: 32,
  },
});
