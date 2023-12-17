import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useStyling } from '../useStyling'; // Make sure this import path is correct
import { Loader2 } from 'lucide-react-native';

const LoadingButton = ({ style = {}, textStyle = {}, text = 'Button', icon = null, onPress = null }) => {
  const styles = useStyling();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.Button.loadingButton, style]}>
      {icon ? icon : <Loader2 size={22} color="grey" />}
      <Text style={[styles.Button.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoadingButton;
