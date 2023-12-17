import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { useTheme } from '../ThemeContext'
const HomeScreen = () => {
    
  const { theme, toggleTheme } = useTheme(); // Use theme from context
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate("Another")}>
        <Text style={{
            color: theme.text
            
        }}>YO!</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})