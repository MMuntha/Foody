import React from 'react';
import {View, Text} from 'react-native';
import {HeaderTitle, SearchIcon, NavBarLogo} from '@atoms';
import styles from './Header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <NavBarLogo />
      </View>
      <View style={styles.titleContainer}>
        <HeaderTitle title="Foody" subTitle="Try It" />
      </View>
      <View style={styles.searchContainer}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default Header;
