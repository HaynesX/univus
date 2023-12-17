import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '../ThemeContext'
import TestScreen from '../screens/TestScreen'
import HomeScreen from '../screens/HomeScreen'
import TopTabsGroup from './TopTabsGroup'

const TabGroup = () => {

    const { theme } = useTheme(); // Use theme from context
    const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator>
      <Tab.Screen
      name="Feed"
      component={TopTabsGroup}
      options={{
        headerShown: false,
      }}
       />
      <Tab.Screen name="Test" component={TestScreen} options={
        {
            headerShown: false,
        }
      } />
    </Tab.Navigator>
  )
}

export default TabGroup

const styles = StyleSheet.create({})