import React, {FunctionComponent} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {ECText} from '../components/ECText';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

export interface AccountNavigationItemProps {
  primaryIcon: Element;
  labelColor?: string;
  onPress: () => void;
}

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const AccountNavigationItem: FunctionComponent<
  AccountNavigationItemProps
> = props => {
  const {primaryIcon, labelColor = sideMenuTextColor, children} = props;

  return (
    <TouchableOpacity style={styles.rootContainer} {...props}>
      <View style={styles.flexContainer}>
        {primaryIcon ? (
          <View style={styles.leftIcon}>{primaryIcon}</View>
        ) : null}
        <ECText textColor={labelColor} fontSize={15} style={styles.label}>
          {children}
        </ECText>
      </View>
      <View>
        <Entypo name="chevron-thin-right" size={18} color={sideMenuTextColor} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    justifyContent: 'center',
    width: 28,
    height: 28,
    marginRight: 12,
    alignItems: 'center',
  },
  label: {
    flexShrink: 1,
    lineHeight: 24,
  },
});
