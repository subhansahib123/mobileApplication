import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DemoList from '../../../common/DemoList';
import { useNavigation } from '@react-navigation/native';

/// Images
import hospitalImage from '../../../assets/images/hospitalImage.png'

export default function HospitalDemoList(props) {


  return (
    <>
      <DemoList
        headingText="Hospitals"
        topText="Hospital name"
        bottomText="Address"
        reviewStar = {true}
        handlePress = {()=>props?.navigator?.navigate('HospitalInfo')}
        images = {hospitalImage}

      />
    </>
  );
}

const styles = StyleSheet.create({});
