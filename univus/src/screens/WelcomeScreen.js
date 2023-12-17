import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { StatusBar } from 'expo-status-bar';
import Button from '../components/Button';
import { Mail } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { setUserToken } from '../store/slices/authSlice';

const WelcomeScreen = () => {

    const { theme } = useTheme(); 
    const styles = useStyling();
    const dispatch = useDispatch();
    const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.WelcomeScreen.safeView}>
        <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'}  />
        <View style={styles.WelcomeScreen.container}>
            <Image source={require('../../assets/logo-lg.png')} style={styles.WelcomeScreen.logo}/>
            <Text style={styles.WelcomeScreen.welcomeText}>Welcome to Univus! 👋</Text>
            <Text style={styles.WelcomeScreen.descriptionText}>Univus provides students with a {'\n'}universe of social and academic tools ✍️</Text>
        </View>
        <View style={styles.WelcomeScreen.bottomButtonsContainer}>

            <Button
              text="Sign Up with Email"
              icon={<Mail size={22} color={theme.oppositeText} />}
              onPress={() => navigation.navigate('SignUpAccountTypeScreen')}
              style={{
                backgroundColor: theme.oppositeBackground,
                borderWidth: 0,
                marginBottom: 15,
              
              }}
              textStyle={{
                color: theme.oppositeText,
              
              }}
          />

          <Button
              text="Log in"
              onPress={() => dispatch(setUserToken('123'))}
              
          />

        </View>

    </SafeAreaView>
  )
}

export default WelcomeScreen

