import { StyleSheet, Text, View, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useLayoutEffect} from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useNavigation } from '@react-navigation/native';

const SignUpPasswordScreen = ({ route }) => {
    const { theme } = useTheme();
    const styles = useStyling();
    const navigation = useNavigation();
    const { accountType, username } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: accountType === 'student' ? 'Student Signup' : 'Lecturer Signup',
        });
      }, [navigation]);


  return (
            <SafeAreaView style={[{ flex: 1, backgroundColor: theme.background}]}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={[styles.Default.container]}>

                        <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 5}]}>Enter a password</Text>
                        <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Input a password for your account</Text>

                    
                        <TextInput 
                            placeholder="Password"
                            isPassword={true}
                            label="Password"
                            mainStyle={{
                                marginBottom: 20
                            
                            }}
                        />

                        <TextInput 
                            placeholder="Confirm Password"
                            isPassword={true}
                            
                            label="Confirm Password"
                        />

                        


                    </View>


                    </TouchableWithoutFeedback>
                </SafeAreaView>
                )
}

export default SignUpPasswordScreen

const styles = StyleSheet.create({})