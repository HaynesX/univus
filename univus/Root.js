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
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const Root = () => {


  
  const { theme, toggleTheme } = useTheme(); // Use theme from context

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.primary, marginTop: 20, backgroundColor: theme.toastBackground, borderRadius: 10, borderColor: theme.border, borderWidth: 2 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: theme.text,
        fontSize: 16,
        fontFamily: 'Inter-Medium',
      }}
      text2Style={{
        color: theme.secondary,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: theme.destructive, marginTop: 20, backgroundColor: theme.toastBackground, borderRadius: 10, borderColor: theme.border, borderWidth: 2 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        color: theme.text,
        fontSize: 16,
        fontFamily: 'Inter-Medium',
      }}
      text2Style={{
        color: theme.secondary,
        fontSize: 14,
        fontFamily: 'Inter-Regular',
      }}
    />
  )
};






    
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
    <>
      <Navigation />
      <Toast config={toastConfig} />
    </>
  )
}

export default Root
