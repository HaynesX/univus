import { StyleSheet, Text, View, Alert, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { GraduationCap } from 'lucide-react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/authSlice';

const SignUpEmailScreen = ({route}) => {
    const { theme } = useTheme();
    const styles = useStyling();
    const navigation = useNavigation();
    const { accountType, username, password } = route.params;
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const dispatch = useDispatch();


    

    const confirmEmail = () =>
    Alert.alert('Confirm Email', 'Are you sure ' + email + ' is the correct email?', [
      {
        text: 'Cancel',
        onPress: () => {
            setLoading(false);
        },
        style: 'cancel',
      },
      {text: 'Sign up', onPress: () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            dispatch(setUser({
                accountType: accountType,
                username: username,
                email: email,
                verified: false,
                token: 123,
            }));
        }, 2000)


        
      }},
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    ]);



    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;



    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle: accountType === 'student' ? 'Student Signup' : 'Lecturer Signup',
        });
      }, [navigation]);


    const handleEmailChange = (text) => {
        setEmail(text);

        if (text === '') {
            setError(false);
            setErrorText('');
            return;
        }

        if (text.includes('gmail') || text.includes('yahoo') || text.includes('hotmail') || text.includes('outlook'), text.includes('icloud')) {
            setError(true);
            setErrorText('Please enter a university (non-personal) email address');
            return;
        }



        if (!re.test(text)) {
            setError(true);
            setErrorText('Please enter a valid email address');
            return;
        }
        


        setError(false);
        setErrorText('');

        


    }







  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[{ flex: 1, backgroundColor: theme.background}]}>
            <View style={[styles.Default.container]}>
                <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 5}]}>Enter your { accountType } email</Text>
                <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Input your university email address</Text>
                <TextInput 
                            placeholder="acc@my.university.ac.uk"
                            label="University email"
                            value={email}
                            icon={
                                <GraduationCap size={22} color={theme.text} />
                            
                            }
                            isError={error}
                            errorMessage={errorText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            editable={!loading}
                            selectTextOnFocus={!loading}
                            autoComplete="email"
                            keyboardType="email-address"

                            mainStyle={{
                                marginBottom: 20
                            }}
                            onChangeText={handleEmailChange}
                        />
                { !error && email.length > 0 && (
                            <Button
                            loading={loading}
                            text="Sign up"
                            onPress={() => {
                                setLoading(true);
                                confirmEmail();
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

export default SignUpEmailScreen

const styles = StyleSheet.create({})