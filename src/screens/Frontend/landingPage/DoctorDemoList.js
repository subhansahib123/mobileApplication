import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DemoList from '../../../common/DemoList';

export default function DoctorDemoList({navigator}) {
  return (
    <>
      <DemoList
        headingText="Doctors nearby you"
        topText="Doctor name"
        bottomText="Qualification"
        reviewStar = {true}
        handlePress = {()=>navigator.navigate('ProfilePage')}
      />
    </>
  );
}

const styles = StyleSheet.create({});
