import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Layout from "./pages/Layout";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" id='1'/>
            <Layout/>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#393E46',
  },
});
