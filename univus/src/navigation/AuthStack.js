import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignUpAccountTypeScreen from '../screens/SignUpAccountTypeScreen'
import SignUpUsernameScreen from '../screens/SignUpUsernameScreen'
import SignUpPasswordScreen from '../screens/SignUpPasswordScreen'
import SignUpEmailScreen from '../screens/SignUpEmailScreen'
import SignUpVerifyEmailScreen from '../screens/SignUpVerifyEmailScreen'
import SignUpInstitutionSelect from '../screens/SignUpInstitutionSelect'
import SignUpInstitutionEmailScreen from '../screens/SignUpInstitutionEmailScreen'
import React from 'react'

import { useTheme } from '../ThemeContext'


const AuthStack = () => {
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

        <StackNavigator.Screen name="WelcomeScreen" component={WelcomeScreen}  options={{ headerShown: false }}/>
        <StackNavigator.Screen name="SignUpAccountTypeScreen" component={SignUpAccountTypeScreen} />
        <StackNavigator.Screen name="SignUpUsernameScreen" component={SignUpUsernameScreen} />
        <StackNavigator.Screen name="SignUpPasswordScreen" component={SignUpPasswordScreen} />
        <StackNavigator.Screen name="SignUpEmailScreen" component={SignUpEmailScreen} />
        <StackNavigator.Screen name="SignUpVerifyEmailScreen" component={SignUpVerifyEmailScreen} />


        <StackNavigator.Screen name="SignUpInstitutionSelect" component={SignUpInstitutionSelect} />
        <StackNavigator.Screen name="SignUpInstitutionEmailScreen" component={SignUpInstitutionEmailScreen} />




    </StackNavigator.Navigator>
  )
}

export default AuthStack