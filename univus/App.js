// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './src/ThemeContext'; // Import ThemeProvider
import { useTheme } from './src/ThemeContext'; // Import useTheme


export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}





const MainContent = () => {
  const { theme } = useTheme(); // Use theme from context
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Open up App.js to start working on your app wow!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // This will be replaced by theme color
    alignItems: 'center',
    justifyContent: 'center',
  },
});
