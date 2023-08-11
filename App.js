import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import {COLORS} from './constans/COLORS'
import { SafeAreaView } from 'react-native-web';
export default function App() {
  
  return (
      <Stack.screen style={styles.container}> 
          <Text style={{color: 'yellow', fontSize: 30}}> uwusito </Text>
          <Text style={{color: 'blue', fontSize: 30}}> uwusito </Text>
          <Text style={{color: 'pink', fontSize: 30}}> uwusito </Text>
          <StatusBar style="auto" />
    </Stack.screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
