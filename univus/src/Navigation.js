import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerGroup from './navigation/DrawerGroup'
import AuthStack from './navigation/AuthStack'
import { useTheme } from './ThemeContext'
import { useStyling } from './useStyling'

import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from './store/slices/authSlice';

const Navigation = () => {

  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.auth);

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        { userToken === null && <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }}/>}
        { userToken !== null && <Stack.Screen name="MainApp" component={DrawerGroup} options={{ headerShown: false }}/>}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})