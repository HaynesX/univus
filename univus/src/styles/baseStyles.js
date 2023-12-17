import { StyleSheet } from 'react-native';

export const baseStyles = (theme) => StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: theme.background,
      },
      container: {
        // flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        
      },
      text: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
      },
      textXS: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 12,
      },
      textS: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 14,
      
      },
      textM: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 16,
      },
      textL: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 18,
      },
      textXL: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 20,
      },
      textXXL: {
        color: theme.text,
        fontFamily: 'Inter-Regular',
        fontSize: 24,
      },
      fontExtraLight: {
        fontFamily: 'Inter-ExtraLight',
      },
      fontThin: {
        fontFamily: 'Inter-Thin',
      },
      fontLight: {
        fontFamily: 'Inter-Light',
      },
      fontRegular: {
        fontFamily: 'Inter-Regular',
      },
      fontMedium: {
        fontFamily: 'Inter-Medium',
      },
      fontSemiBold: {
        fontFamily: 'Inter-SemiBold',
      },
      fontBold: {
        fontFamily: 'Inter-Bold',
      },
      fontExtraBold: {
        fontFamily: 'Inter-ExtraBold',
      },


  // Add more styles as needed
});

