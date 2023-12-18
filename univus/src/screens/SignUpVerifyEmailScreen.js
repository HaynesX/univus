import { StyleSheet, Text, View, ScrollView, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useEffect, useLayoutEffect, useState} from 'react'
import Button from '../components/Button'
import ResentEmail from '../components/ResentEmail'
import TextInput from '../components/TextInput'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { setDefaultUser } from '../store/slices/authSlice';
import { ChevronLeft } from 'lucide-react-native';
import * as Progress from 'react-native-progress';

const SignUpVerifyEmailScreen = ({ route }) => {

    const { theme } = useTheme();
    const styles = useStyling();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleResendEmail = () => {
        console.log('Resending email...');
        // Implement the actual email resend logic here
    };
    
    



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={[{ flex: 1, backgroundColor: theme.background}]}>

            <View style={[styles.Default.container]}>
                <Button
                    text="Logout"
                    icon={<ChevronLeft size={20} color={theme.mutedForeground} />}
                    onPress={() => {
                        dispatch(setDefaultUser());
                    }}
                    style={{
                        justifyContent: 'flex-start',
                        padding: 0,
                        borderWidth: 0,
                        width: 120,
                        marginLeft: -20,
                    
                    }}
                    textStyle={{
                        color: theme.mutedForeground,
                        fontSize: 16,
                    }}
                />


                <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 10, marginBottom: 5}]}>Verify Email</Text>
                <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Please click the verification link sent to {user.email}</Text>

                <Button
                    text="Awaiting verification"
                    icon={<Progress.Circle size={20} indeterminate={true} color={theme.secondary} borderWidth={2}  />}
                    onPress={() => {
                        console.log('logout')
                    }}
                    textStyle={{
                        color: theme.secondary,
                        fontSize: 16,
                    }}
                    disabled={true}
                />

                




            </View>




            <View style={{flex: 1,
                            justifyContent: 'flex-end',
                            padding: 30,}}>
                    <ResentEmail
                    onResend={handleResendEmail}
                />
                </View>




        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpVerifyEmailScreen

const styles = StyleSheet.create({})