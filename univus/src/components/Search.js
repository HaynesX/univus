import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TextInput from './TextInput';
import SearchContainer from './SearchContainer';
import { useTheme } from '../ThemeContext';
import { Search as SearchIcon } from 'lucide-react-native';

const Search = ({ label, placeholder, icon, onSearch, onItemClick, data }) => {
    const { theme } = useTheme();
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (text) => {
        setQuery(text);
        if (text === '') {
            setFilteredData([]);
        } else {
            const searchText = text.toLowerCase();
            const filtered = data.filter(item => 
                Object.values(item).some(value => 
                    safeStringify(value).toLowerCase().includes(searchText)
                )
            );
            setFilteredData(filtered);
        }
    };

    const safeStringify = (value) => {
        if (value === null || value === undefined) return '';
        if (typeof value === 'object' || Array.isArray(value)) {
            return JSON.stringify(value);
        }
        return value.toString();
    };

    return (
        <View style={{height: 300, maxHeight: 300}}>
            <TextInput
                placeholder={placeholder || "Search"}
                label={label || "Search"}
                autoCapitalize="none"
                autoComplete="off"
                icon={icon || <SearchIcon size={20} color={theme.text} />}
                onChangeText={handleSearch}
                value={query}
            />
            {filteredData.length > 0 && (
                <SearchContainer data={filteredData} onItemClick={onItemClick} query={query} />
            )}
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        // Your styles here
    },
});
