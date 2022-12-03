import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StartUpPage from '../../../common/StartUpPage'

import DoctorPatientImage from '../../../assets/images/Appointment.png'

export default function StartUp3({navigation}) {
  return (
    <>
    <StartUpPage 
   headingText="Book Appointment"
   captionText={`Book an appointment with a
right doctor`}
   buttonText="Next"
   navigator={()=>navigation.navigate('LogIn')}
   imagePath = {DoctorPatientImage}

    />
    
    </>
  )
}

