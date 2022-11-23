import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {StoryView, Header, PopularView, CategoryView} from '@molecules';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <StoryView />
        <PopularView />
        <CategoryView />
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
