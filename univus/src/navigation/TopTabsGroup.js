import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useTheme } from '../ThemeContext'
import TestScreen from '../screens/TestScreen'
import HomeScreen from '../screens/HomeScreen'




const TopTabsGroup = () => {
    const TopTabs = createMaterialTopTabNavigator();

  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Home" component={HomeScreen} />
      <TopTabs.Screen name="Test" component={TestScreen} />
    </TopTabs.Navigator>
  )
}

export default TopTabsGroup

const styles = StyleSheet.create({})