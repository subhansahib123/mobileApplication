import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import bgImage from '../../../assets/images/optic2.jpg';
import HopitalInfoCard from './HopitalInfoCard';

export default function HopitalInfoPage({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <ScrollView
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={styles?.bgImageSection}>
        <ImageBackground
          source={bgImage}
          style={{}}>
          <View style={styles?.topSection}>
            <View style={styles?.leftTextSection}>
              <AntDesignIcon
                name="arrowleft"
                size={30}
                color={colors?.accent?.white}
                style={{marginRight : 10}}
              />
              <Text
                style={[styles?.headerText, {color: colors?.accent?.white}]}>
                Ophthalmologist
              </Text>
            </View>
            <Text style={{color : colors?.accent?.white,fontSize : 14}}>Country</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{top : '-10%',marginBottom : '-17%'}}>
        <HopitalInfoCard navigator ={navigation}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageSection: {},
  headerText: {
    fontSize: 22,
    fontWeight : 'bold'
  },
  topSection : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingHorizontal : '8%',
    marginTop : '4%',
    marginBottom : '50%'
  },
  leftTextSection : {
    flexDirection : 'row',
    alignItems : 'center',
    marginLeft : -10
  },
});
