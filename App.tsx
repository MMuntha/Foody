import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StoryView, Header, PopularView} from '@molecules';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <StoryView />
        <PopularView />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
