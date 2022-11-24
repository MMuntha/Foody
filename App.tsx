import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {BottomTabNavigation} from '@navigators';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <BottomTabNavigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
