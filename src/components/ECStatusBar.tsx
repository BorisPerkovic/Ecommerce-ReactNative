import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';

interface MyStatusBarProps {
  backColor: string;
  themeStyle: 'dark-content' | 'light-content' | 'default';
}

export const MyStatusBar: FunctionComponent<MyStatusBarProps> = ({
  backColor,
  themeStyle = 'default',
}) => {
  return (
    <View style={[styles.container, {backgroundColor: backColor}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={backColor}
          barStyle={themeStyle}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: StatusBar.currentHeight,
  },
});
