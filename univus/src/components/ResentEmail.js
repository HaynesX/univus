import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../ThemeContext';
import { useStyling } from '../useStyling';


const ResentEmail = ({ onResend }) => {

    const { theme } = useTheme();
    const styles = useStyling();


    const [resendEnabled, setResendEnabled] = useState(true);
    const [countdown, setCountdown] = useState(60);

    const sendEmail = () => {
        onResend(); // Call the provided resend function
        setResendEnabled(false);
        setCountdown(60);

        const interval = setInterval(() => {
            setCountdown(prevCount => {
                if (prevCount <= 1) {
                    clearInterval(interval);
                    setResendEnabled(true);
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    };

    useEffect(() => {
        if (resendEnabled) {
            setCountdown(60); // Reset countdown when resend is enabled again
        }
    }, [resendEnabled]);

    return (
        <View style={{ justifyContent: 'flex-start' }}>
            <Text style={[styles.Default.text, {
                color: theme.secondary
            }]}>
                Didn't receive an email?
                {resendEnabled ? (
                    <TouchableOpacity onPress={sendEmail} style={{
                        // Remove the default button styles:
                        marginTop: -3,

                        
                    }}>
                        <Text style={{ color: theme.primary, fontSize: 16 }}> Resend</Text>
                    </TouchableOpacity>
                ) : (
                    <Text style={{ color: theme.primary }}> {`Resend in ${countdown}s`}</Text>
                )}
            </Text>
        </View>
    );
};

export default ResentEmail;
