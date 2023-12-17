import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from './src/ThemeContext';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
// import WelcomeScreen from './src/screens/WelcomeScreen';
import Navigation from './src/Navigation';

import { useDispatch, useSelector } from 'react-redux';
import { loadFonts } from './src/store/slices/appInitSlice';
import { setIsLoading } from './src/store/slices/authSlice';

import * as SplashScreen from 'expo-splash-screen';

const Root = () => {
    const { toggleTheme } = useTheme(); // Use theme from context
    const currentTheme = useColorScheme();
    const dispatch = useDispatch();

    const { fontsLoaded } = useSelector((state) => state.appInit);
    const { isLoading } = useSelector((state) => state.auth);

    const isAppReady = fontsLoaded && !isLoading;

    useEffect(() => {
        if (currentTheme == 'light') {
        toggleTheme('light');
        } else {
        toggleTheme('dark');
        }

    }, [currentTheme]);

  useEffect(() => {
    dispatch(loadFonts()); // Dispatch action to load fonts
  }, [dispatch]);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null; // Keep showing the splash screen
  }

  




  return (
    <Navigation />
  )
}

export default Root
