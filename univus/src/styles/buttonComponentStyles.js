import { StyleSheet } from 'react-native';

export const buttonComponentStyles = (theme) => StyleSheet.create({
    button: {
        borderRadius: 16,
        flexDirection: 'row',
        gap: 10,
        borderColor: theme.border,
        borderWidth: 2,
        padding: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    loadingButton: {
        borderRadius: 16,
        flexDirection: 'row',
        gap: 10,
        borderColor: theme.border,
        borderWidth: 2,
        padding: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        opacity: 0.7,
    
    },
    text: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 18,
    },
  // Add more styles as needed
});

