import React, {useState} from 'react';
import { Text, View, TextInput as TInput, TouchableOpacity } from 'react-native';
import { useStyling } from '../useStyling'; // Make sure this import path is correct
import { Eye, EyeOff } from 'lucide-react-native';

import { useTheme } from '../ThemeContext';


const TextInput = ({ mainStyle = {}, isPassword = false, style = {}, inputStyle = {}, label = null, icon = null, placeholder = 'Input...', isError = false, errorMessage = null, ...otherProps }) => {
  const styles = useStyling();
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(!isPassword); // State to toggle password visibility
  const { theme } = useTheme();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const togglePasswordVisibility = () => {
    // Directly set the state to the opposite of the current value
    setPasswordVisible(!passwordVisible);
  };
  

  let dynamicStyle = isFocused ? styles.TextInput.focusedInput : {};
  if (isError) {
    dynamicStyle = styles.TextInput.errorInput; // Apply error style
  }

  return (
    <View style={mainStyle}>
      {label && <Text style={[styles.Default.textXS, styles.Default.fontMedium, { marginBottom: 5 }]}>{label}</Text>}
      <View style={[styles.TextInput.input, dynamicStyle, style, { flexDirection: 'row', alignItems: 'center' }]}>
        {icon}
        <TInput
          style={[styles.TextInput.textInput, inputStyle, { flex: 1 }]}
          placeholder={placeholder}
          underlineColorAndroid="transparent"
          secureTextEntry={isPassword && !passwordVisible} // Only for password inputs
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={{ marginLeft: 'auto' }}>
            {passwordVisible ? <Eye size={20} color={theme.text} /> : <EyeOff size={20} color={theme.text} />}
          </TouchableOpacity>
        )}
      </View>
      {isError && errorMessage && (
        <Text style={[styles.TextInput.errorText]}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default TextInput;
