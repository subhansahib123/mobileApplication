import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StartUpPage from '../../../common/StartUpPage';

export default function StartUp1({navigation}) {
  return (
    <>
      <StartUpPage
        headingText="Find Best Hospital"
        captionText={`Get list of best hospital    
nearby you`}
        buttonText="Next"
        navigator = {()=>navigation.navigate('Startup2')}
  />
    </>
  );
}
