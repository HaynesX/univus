import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerGroup from './navigation/DrawerGroup'
import { useTheme } from './ThemeContext'

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})