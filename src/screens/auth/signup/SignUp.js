import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthPage from '../../../common/AuthPage'

export default function SignUp() {
  return (
    <>
    <AuthPage 
    titleText = 'Sign up with'
    subtitleText = 'phone number'
    buttonText = 'Sign Up'
    bottomText = 'Already have an account? Sign In'
    />
    </>
  )
}

