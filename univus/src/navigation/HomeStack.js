import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AnotherScreen from '../screens/AnotherScreen'
import HomeScreen from '../screens/HomeScreen'
import TestScreen from '../screens/TestScreen'

import TabGroup from './TabGroup'

const HomeStack = () => {

    const Stack = createNativeStackNavigator();


  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={TabGroup} options={{
            headerShown: false
        }} />
        <Stack.Screen name="Another" component={AnotherScreen} />
        <Stack.Screen name="Test" component={TestScreen} />

    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({})