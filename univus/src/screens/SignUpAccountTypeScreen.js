import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'

import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useNavigation } from '@react-navigation/native';


const SignUpAccountTypeScreen = () => {
    const { theme } = useTheme(); 
    const styles = useStyling();
    const navigation = useNavigation();

    const [selected, setSelected] = React.useState(null);





  return (
    <SafeAreaView style={[styles.Default.safeView]}>
      <View style={[styles.Default.container]}>
        <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 20}]}>Select account type</Text>

          {selected === 'student' ? (
            <Button
              text={"I'm a student"}
              icon={<Text>🎓 </Text>}
              style={{justifyContent: 'flex-start', marginBottom: 10, backgroundColor: theme.oppositeBackground, borderWidth: 0}}
              textStyle={{color: theme.oppositeText}}
              onPress={() => setSelected(null)}
            />
          ) : (
            <Button
              text={"I'm a student"}
              icon={<Text>🎓 </Text>}
              style={{justifyContent: 'flex-start', marginBottom: 10}} // Normal button style
              onPress={() => setSelected('student')}
            />
          )}


          

          {selected === 'lecturer' ? (
            <Button
              text={"I'm a lecturer"}
              icon={<Text>🧑‍🏫 </Text>}
              style={{justifyContent: 'flex-start', marginBottom: 30, backgroundColor: theme.oppositeBackground, borderWidth: 0}}
              textStyle={{color: theme.oppositeText}}
              onPress={() => setSelected(null)}
            />
          ) : (
            <Button
              text={"I'm a lecturer"}
              icon={<Text>🧑‍🏫 </Text>}
              style={{justifyContent: 'flex-start', marginBottom: 30}} // Normal button style
              onPress={() => setSelected('lecturer')}
            />
          )}




          {selected && (
            <Button
              text={"Continue"}
              style={{backgroundColor: theme.primary, borderWidth: 0}}
              textStyle={{color: theme.primaryForeground}}
              onPress={() => {
                navigation.navigate('SignUpUsernameScreen', {accountType: selected})
              }}
            />
          )}



      </View>


      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
      }}>

        <Text style={{
          textAlign: 'center',
          color: theme.secondary,
          fontSize: 16,
        }}>Want to sign up as an institution?</Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate('SignUpInstitutionSelect')
        }}>
          <Text style={{
            textAlign: 'center',
            color: theme.secondary,
            fontFamily: 'Inter-SemiBold',
            fontSize: 16,
          }}>Click here</Text>
        </TouchableOpacity>



      </View>
    </SafeAreaView>
  )
}

export default SignUpAccountTypeScreen

const styles = StyleSheet.create({})