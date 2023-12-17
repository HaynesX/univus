import { StyleSheet } from 'react-native';

export const textInputComponentStyles = (theme) => StyleSheet.create({
  input: {
    borderRadius: 16,
    flexDirection: 'row',
    gap: 10,
    borderColor: theme.border,
    borderWidth: 2,
    padding: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  textInput : {
    color: theme.text,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    flex: 1,
    width: '100%',
  },
  focusedInput: {
    borderColor: theme.primary,
    borderWidth: 2,
  },
  errorInput: {
    borderColor: theme.destructive,
    borderWidth: 2,
  },
  errorText: {
    color: theme.destructive,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginTop: 5,
    width: '100%',
  }
  // Add more styles as needed
});

