import { StyleSheet } from 'react-native';

export const welcomeScreenStyles = (theme) => StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 30,
    
  },
  bottomButtonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 30,
  },
  text: {
    color: theme.text,
    fontFamily: 'Inter-Medium',
    fontSize: 32,
    marginBottom: 15,
  },
  welcomeText: {
    color: theme.text,
    marginBottom: 15,
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
  },
  descriptionText: {
    color: theme.text,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  }
  // Add more styles as needed
});

