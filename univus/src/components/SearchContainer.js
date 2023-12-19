import React from 'react';
import { View, FlatList, ScrollView, StyleSheet, Keyboard } from 'react-native';
import SearchResult from './SearchResult';

import { useTheme } from '../ThemeContext';
import { useStyling } from '../useStyling';


const SearchContainer = ({ data, onItemClick, query }) => {

    const { theme } = useTheme();
    const styles = useStyling();


    return (
        <View style={{ 
            flex: 1,
            borderColor: theme.border,
            borderWidth: 2,
            borderRadius: 16,
            padding: 20,
            // maxHeight: 300,
            marginTop: 10,
        }}>
            {/* <ScrollView> */}
                <FlatList
                    keyboardShouldPersistTaps= 'handled'
                    data={data}
                    keyExtractor={(item, index) => item.id.toString() || index.toString()}
                    renderItem={({ item }) => (
                        <SearchResult item={item} onPress={() => {
                            onItemClick(item)
                            Keyboard.dismiss()
                        }} query={query} />
                    )}
                />
            {/* </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
});

export default SearchContainer;
