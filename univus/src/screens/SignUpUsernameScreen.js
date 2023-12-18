import { SafeAreaView, KeyboardAvoidingView, ActivityIndicator, TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Button from '../components/Button'
import LoadingButton from '../components/LoadingButton'
import TextInput from '../components/TextInput'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useNavigation } from '@react-navigation/native';
import { AtSign } from 'lucide-react-native';
import { Loader2 } from 'lucide-react-native';


const SignUpUsernameScreen = ({ route }) => {
    const { theme } = useTheme(); 
    const styles = useStyling();
    const navigation = useNavigation();
    const { accountType } = route.params;
    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (text) => {

        if (text.length > 15) {
            return;
        }

        if (text.match(/[^a-zA-Z0-9]+/g)) {
            setUsername(text);
            setError(true);
            setErrorText('Username must contain only letters and numbers');
            return;
        }
        else {
            setUsername(text);
            setError(false);
            setErrorText(null);
        }

    };
    

    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: accountType === 'student' ? 'Student Signup' : 'Lecturer Signup',
        });
      }, [navigation]);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={[styles.Default.safeView]}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}




                <View style={[styles.Default.container]}>
                    <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 5}]}>Create your username</Text>
                    <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Enter a username to identify yourself</Text>

                    
                    <TextInput
                        placeholder='Enter username...'
                        icon={<AtSign size={20} color={theme.text} />}
                        mainStyle={{marginBottom: 30}}
                        color={theme.text}
                        editable={!loading}
                        label='Username'
                        selectTextOnFocus={!loading}
                        autoCapitalize="none"
                        value={username}
                        autoComplete='username'
                        textContentType='username'
                        keyboardType='default'
                        onChangeText={handleUsernameChange}
                        isError={error}
                        errorMessage={errorText}
                        


                        />


                    {username.length >= 3 && username.length <= 15 && !error && (
                            <Button
                            loading={loading}
                            text="Continue"
                            onPress={() => {
                                setLoading(true);
                                setTimeout(() => {
                                    setLoading(false);
                                    navigation.navigate('SignUpPasswordScreen', {accountType: accountType, username: username})
                                }, 2000);
                            }}
                            style={{backgroundColor: theme.primary, borderWidth: 0}}
                            textStyle={{color: theme.primaryForeground}}
                        />
                    )}
                    

                    
                </View>





            {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpUsernameScreen

const styles = StyleSheet.create({})