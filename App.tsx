import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {

  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text> Hello World </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
