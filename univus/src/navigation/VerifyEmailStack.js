import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUpVerifyEmailScreen from '../screens/SignUpVerifyEmailScreen'
import React from 'react'

import { useTheme } from '../ThemeContext'


const VerifyEmailStack = () => {
        const StackNavigator = createNativeStackNavigator();
        const { theme } = useTheme();

  return (
    <StackNavigator.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: theme.background, 
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: theme.text,
      headerTitle: '', 
      headerShadowVisible: false,
      headerBackTitleVisible: false, 
    }}>
        <StackNavigator.Screen name="SignUpVerifyEmailScreen" component={SignUpVerifyEmailScreen}  options={{ headerShown: false }} />




    </StackNavigator.Navigator>
  )
}

export default VerifyEmailStack