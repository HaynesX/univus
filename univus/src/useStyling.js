import { StyleSheet } from 'react-native';
import { useTheme } from './ThemeContext';
import { welcomeScreenStyles } from './styles/welcomeScreenStyles';

// Hook that returns dynamic styles
export const useStyling = () => {
  const { theme } = useTheme();

  const styles = {
    // Always the name of the component
    WelcomeScreen: welcomeScreenStyles(theme),
  }

  return styles;
};
