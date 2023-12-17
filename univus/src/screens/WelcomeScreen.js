import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = () => {

    const { theme } = useTheme(); 
    const styles = useStyling();

  return (
    <SafeAreaView style={styles.WelcomeScreen.container}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}  />
      <Text style={styles.WelcomeScreen.text}>WelcomeScreen!</Text>
    </SafeAreaView>
  )
}

export default WelcomeScreen

