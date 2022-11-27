import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DemoList from '../../../common/DemoList';
import { useNavigation } from '@react-navigation/native';

export default function HospitalDemoList({}) {

  const navigation = useNavigation()

  return (
    <>
      <DemoList
        headingText="Hospital nearby you"
        topText="Hospital name"
        bottomText="Address"
        reviewStar = {true}
        handlePress = {navigation.navigate('HospitalInfo')}
      />
    </>
  );
}

const styles = StyleSheet.create({});
