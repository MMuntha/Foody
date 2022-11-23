import * as React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';

const NavBarLogo = () => (
  <View>
    <Avatar.Text
      size={50}
      label="FD"
      style={{backgroundColor: '#E42021'}}
      labelStyle={{fontWeight: 'bold'}}
    />
  </View>
);

export default NavBarLogo;
