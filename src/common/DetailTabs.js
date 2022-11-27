import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstRoute from '../screens/Frontend/doctorDetails/FirstRoute';
import SecondRoute from '../screens/Frontend/doctorDetails/SecondRoute';
import ThirdRoute from '../screens/Frontend/doctorDetails/ThirdRoute';
const Tab = createMaterialTopTabNavigator();

export default function DetailTabs(props) {

  const {firstRouteName,secondRouteName,thirdRouteName} = props

  return (
    <Tab.Navigator style={{borderTopLeftRadius : 15, borderTopRightRadius : 15,height : 380}}>
      <Tab.Screen name={firstRouteName} component={FirstRoute} />
      <Tab.Screen name={secondRouteName} component={SecondRoute} />
      <Tab.Screen name={thirdRouteName} component={ThirdRoute} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
