import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeStack from './HomeStack'
import TestScreen from '../screens/TestScreen'


const DrawerGroup = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Test" component={TestScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerGroup

const styles = StyleSheet.create({})