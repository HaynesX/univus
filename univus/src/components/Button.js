import React, { useEffect } from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useStyling } from '../useStyling'; 


const Button = ({ style = {}, textStyle = {}, text = 'Button', icon = null, onPress = null, loading = false, disabled = false, loadingColor = 'white' }) => {
  const styles = useStyling();

  let dynamicStyle = loading ? styles.Button.loadingButton : styles.Button.button;

  useEffect(() => {

    dynamicStyle = loading ? styles.Button.loadingButton : styles.Button.button;

  }, [loading]);

  return (
    <TouchableOpacity onPress={onPress} style={[dynamicStyle, style]} disabled={loading || disabled}>
      {loading ? (
        <>
          <ActivityIndicator color={loadingColor} /> 
        </>
      ) : (
        <>
          {icon}
          <Text style={[styles.Button.text, textStyle]}>{text}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
