import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { useTheme } from '../ThemeContext';
import { useStyling } from '../useStyling';


const SearchResult = ({ item, onPress, query }) => {
    const { theme } = useTheme();
    const styles = useStyling();

    return (
        <TouchableOpacity onPress={onPress} style={{
            // backgroundColor: theme.destructive,
            marginBottom: 18,
            // backgroundColor: theme.primary,
            // padding: 10,
            borderRadius: 12,
        
        }}>
            <Text style={[ styles.Default.textS, styles.Default.fontSemiBold, {marginBottom: 3, color: theme.text} ]}>{item.title}</Text>
            <Text style={[ styles.Default.textXS,styles.Default.fontRegular, { color: theme.secondary} ]}>{item.id}</Text>
        </TouchableOpacity>
    );
};

export default SearchResult;
