import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'
import { useStyling } from '../useStyling'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/slices/authSlice';
import { useNavigation } from '@react-navigation/native';

import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton'


import Search from '../components/Search';

const exampleData = [
    {
        id: 105605789,
        title: "University of Northampton",
        description: "The University of Northampton"
    },
    {
        id: 105605790,
        title: "University of Birmingham",
        description: "The University of Birmingham"
    },
    {
        id: 999999999,
        title: "University of GraceTech",
        description: "The University of GraceTech"
    }
    // ... more items ...
];

const Spacer = ({ height = 16 }) => <View style={{ height }} />;

const SignUpInstitutionSelect = ({route}) => {
    const { theme } = useTheme();
    const styles = useStyling();
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const isUniversitiesLoading = false;
    const currentTheme = useColorScheme();
    const [university, setUniversity] = useState({});


  return (
    <KeyboardAvoidingView style={{
        flex: 1
    }} 

    behavior={Platform.OS === "ios" ? "position" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? -150 : 20}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={[{  backgroundColor: theme.background}]}>
                <View style={[styles.Default.container, {height: '100%'}]}>


                    {isUniversitiesLoading && (

                        <MotiView
                        transition={{
                            type: 'timing',
                        }}

                        
                        animate={{ backgroundColor: theme.background }}
                        >

                            {/* <Skeleton colorMode={'dark'} radius="round" height={75} width={75} /> */}
                            <Spacer height={10} />
                            <Skeleton colorMode={currentTheme} width={'60%'} height={30} />
                            <Spacer height={8} />
                            <Skeleton colorMode={currentTheme} width={'80%'} height={30} />
                            <Spacer height={30} />
                            <Skeleton colorMode={currentTheme} width={'50%'} height={20} />
                            <Spacer height={5} />
                            <Skeleton colorMode={currentTheme} width={'100%'} height={45} />

                        </MotiView>

                    )}

                    {!isUniversitiesLoading && (

                        <>
                            <Text style={[styles.Default.textL, styles.Default.fontSemiBold, {marginTop: 20, marginBottom: 5}]}>Search institution</Text>
                            <Text style={[styles.Default.text, {marginBottom: 30, color: theme.secondary}]}>Select your UK recognised university</Text>
                        
                            <Search
                                data={exampleData}
                                label={"Search by UKPRN / Name"}
                                placeholder={"University of GraceTech"}
                                onSearch={(text) => {console.log(text)}}
                                onItemClick={(item) => {
                                    setUniversity(item)
                                    navigation.navigate('SignUpInstitutionEmailScreen', {university: university})
                                    
                                }}
                            />
                        </>

                    )}


                    






                        

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
  )
}

export default SignUpInstitutionSelect

const styles = StyleSheet.create({})