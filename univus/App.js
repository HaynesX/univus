// App.js
import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/ThemeContext'; // Import ThemeProvider
import Navigation from './src/Navigation'
import { useTheme } from './src/ThemeContext';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

import { useAppReady } from './src/useAppReady';


export default function App() {

  const isAppReady = useAppReady(); // Use the custom hook

  if (!isAppReady) {
    return null; // If the app isn't ready, render nothing or some loading indicator
  }

  


  return (
      <ThemeProvider>
        <MainContent />
      </ThemeProvider>
  );
}





const MainContent = ({}) => {

  const { theme, toggleTheme } = useTheme(); // Use theme from context
  const currentTheme = useColorScheme();
  

  useEffect(() => {
    if (currentTheme == 'light') {
      toggleTheme('light');
    } else {
      toggleTheme('dark');
    }

  }, [currentTheme]);


  return (
    <WelcomeScreen/>
    // <Navigation />
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
