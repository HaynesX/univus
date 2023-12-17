import { StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';
import { welcomeScreenStyles } from './styles/welcomeScreenStyles';
import { buttonComponentStyles } from './styles/buttonComponentStyles';
import { baseStyles } from './styles/baseStyles';
import { textInputComponentStyles } from './styles/textInputComponentStyles';

// Hook that returns dynamic styles
export const useStyling = () => {
  const { theme } = useTheme();

  const styles = {
    // Always the name of the component
    WelcomeScreen: welcomeScreenStyles(theme),
    Button: buttonComponentStyles(theme),
    Default: baseStyles(theme),
    TextInput: textInputComponentStyles(theme),
  }

  return styles;
};
