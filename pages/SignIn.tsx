import {   ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
          <ScrollView contentContainerClassName='h-full'>
              <Image/>
              <Text>Sing In</Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})