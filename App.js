import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'yellow', fontSize: 30}}> uwusito </Text>
      <Text style={{color: 'blue', fontSize: 30}}> uwusito </Text>
      <Text style={{color: 'pink', fontSize: 30}}> uwusito </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
