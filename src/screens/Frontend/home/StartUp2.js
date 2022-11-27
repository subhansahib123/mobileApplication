import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StartUpPage from '../../../common/StartUpPage';

export default function StartUp2({navigation}) {
  return (
    <>
      <StartUpPage
        headingText="Find Best Doctors"
        captionText={`Get list of best doctor 
nearby you`}
        buttonText="Next"
        navigator={()=>navigation.navigate('Startup3')}
      />
    </>
  );
}
