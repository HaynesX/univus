import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'

import { useDispatch, useSelector } from 'react-redux';
import { setUserToken } from '../store/slices/authSlice';

const TestScreen = () => {
  
      const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Button text="Test" onPress={() => dispatch(setUserToken(null))} />
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({})