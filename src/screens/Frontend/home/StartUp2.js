import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StartUpPage from '../../../common/StartUpPage';

import DoctorImage from '../../../assets/images/dr.png'


export default function StartUp2({navigation}) {
  return (
    <>
      <StartUpPage
        headingText="Find Best Specialists"
        captionText={`Get list of best specialists 
nearby you`}
        buttonText="Next"
        navigator={()=>navigation.navigate('Startup3')}
        imagePath = {DoctorImage}
      />
    </>
  );
}
