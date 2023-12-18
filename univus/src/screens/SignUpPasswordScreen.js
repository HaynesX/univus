import { StyleSheet, Text, View, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useNavigation } from '@react-navigation/native';
// import Toast from 'react-native-toast-message';



const SignUpPasswordScreen = ({ route }) => {
    const { theme } = useTheme();
    const styles = useStyling();
    const navigation = useNavigation();
    const { accountType, username } = route.params;
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: accountType === 'student' ? 'Student Signup' : 'Lecturer Signup',
        });
      }, [navigation]);

    

    useEffect(() => {
        if (password === '') {
            setError(false);
            setErrorText(null);
            return;
        }

        if (password.length < 8) {
            setError(true);
            setErrorText('Password must be at least 8 characters');
            return;
        }
        else {
            setError(false);
            setErrorText(null);
        }

        if (password !== confirmPassword) {
            if (confirmPassword === '') {
                setConfirmPasswordError(false);
                setConfirmPasswordErrorText(null);
                return;
            }
            setConfirmPasswordError(true);
            setConfirmPasswordErrorText('Passwords do not match');
            return;
        }
        else {
            setConfirmPasswordError(false);
            setConfirmPasswordErrorText(null);
        }




    }, [password, confirmPassword]);




    
    const handlePasswordChange = (text) => {
        setPassword(text)
    }
    
    const handleConfirmPasswordChange = (text) => {
        if (text !== password) {
            if (text === '') {
                setConfirmPassword(text);
                setConfirmPasswordError(false);
                setConfirmPasswordErrorText(null);
                return;
            }

            setConfirmPassword(text);
            setConfirmPasswordError(true);
            setConfirmPasswordErrorText('Passwords do not match');
            return;
        }
        else {
            setConfirmPassword(text);
            setConfirmPasswordError(false);
            setConfirmPasswordErrorText(null);
        }

    }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={[{ flex: 1, backgroundColor: theme.background}]}>
            

                    <View style={[styles.Default.container]}>
                        

                        <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 5}]}>Enter a password</Text>
                        <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Input a password for your account</Text>

                    
                        <TextInput 
                            placeholder="Password"
                            isPassword={true}
                            label="Password"
                            value={password}
                            isError={error}
                            errorMessage={errorText}
                            mainStyle={{
                                marginBottom: 20
                            }}
                            onChangeText={handlePasswordChange}
                        />

                        <TextInput 
                            placeholder="Confirm Password"
                            isPassword={true}
                            value={confirmPassword}
                            isError={confirmPasswordError}
                            errorMessage={confirmPasswordErrorText}
                            label="Confirm Password"
                            mainStyle={{
                                marginBottom: 30
                            }}
                            onChangeText={handleConfirmPasswordChange}
                        />

                        { password.length >= 8 && password === confirmPassword && !error && !confirmPasswordError && (
                            <Button
                            loading={loading}
                            text="Continue"
                            onPress={() => {
                                navigation.navigate('SignUpEmailScreen', {
                                    accountType: accountType,
                                    username: username,
                                    password: password
                                })
                            }}
                            style={{backgroundColor: theme.primary, borderWidth: 0}}
                            textStyle={{color: theme.primaryForeground}}
                        />
                    )}

                        


                    </View>


                    
                </SafeAreaView>
                </TouchableWithoutFeedback>
                )
}

export default SignUpPasswordScreen

const styles = StyleSheet.create({})