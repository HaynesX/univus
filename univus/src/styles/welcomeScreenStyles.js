import { StyleSheet } from 'react-native';

export const welcomeScreenStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
  },
  text: {
    color: theme.text,
    fontFamily: 'Inter-Medium',
    fontSize: 32,

  },
  // Add more styles as needed
});
