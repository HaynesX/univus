import { StyleSheet, Text, View, TouchableWithoutFeedback, SafeAreaView, KeyboardAvoidingView, Keyboard } from 'react-native'
import React from 'react'

import { useTheme } from '../ThemeContext';
import { useStyling } from '../useStyling';



const SignUpInstitutionEmailScreen = ({route}) => {

    const { theme } = useTheme();
    const styles = useStyling();

    const { university } = route.params;




  return (
    <KeyboardAvoidingView style={{
        flex: 1
    }} 

    behavior={Platform.OS === "ios" ? "position" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? -150 : 20}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={[{  backgroundColor: theme.background}]}>
                <View style={[styles.Default.container, {height: '100%'}]}>

                <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 5}]}>Send Signup Email Code</Text>
                <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Send signup email to recognised uni email</Text>


                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default SignUpInstitutionEmailScreen

const styles = StyleSheet.create({})