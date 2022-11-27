import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontisoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../../common/Button';

export default function DrInfoCard() {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
      <View style={styles?.upperContent}>
        <View style={styles?.topLeftCardSection}>
          <View
            style={[
              styles?.avatar,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}></View>
          <Text style={[styles?.votes, {color: colors?.accent?.grey}]}>
            36 votes
          </Text>
          <Text style={[styles?.feedBack, {color: colors?.accent?.dark}]}>
            95 Feedback
          </Text>
        </View>
        <View style={styles?.topRightCardSection}>
          <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
            Dr. Jitendra Raut
          </Text>
          <View
            style={[
              styles?.drInfoSection,
              {borderColor: colors?.accent?.lightGrey},
            ]}>
            <Text style={{color: colors?.accent?.grey}}>
              B.Sc, MBBS, DDVL, MD{' '}
            </Text>
            <Text style={{color: colors?.accent?.grey}}>Ophthalmologist</Text>
            <Text style={{color: colors?.accent?.grey}}>
              26 years of experience
            </Text>
          </View>
          <View style={styles?.info}>
            <View style={{flexDirection: 'row'}}>
              <FontisoIcon
                name="doctor"
                size={20}
                color={colors?.gradients?.purple?.first}
              />
              <Text style={{color: colors?.accent?.grey}}>1 Doctor</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name="md-location-outline"
                size={20}
                color={colors?.gradients?.purple?.first}
              />
              <Text style={{color: colors?.accent?.grey}}>Andheri East</Text>
            </View>
          </View>
          <Text style={[styles?.fee, {color: colors?.accent?.dark}]}>
            $500 onwards
          </Text>
        </View>
      </View>
      <View style={styles?.cardBottomPills}>
        <View style={[styles?.pill, {borderColor: colors?.accent?.lightGrey}]}>
          <Text style={[styles?.pillText, {color: colors?.accent?.grey}]}>
            Eye Sur...
          </Text>
        </View>
        <View style={[styles?.pill, {borderColor: colors?.accent?.lightGrey}]}>
          <Text style={[styles?.pillText, {color: colors?.accent?.grey}]}>
            Anterior Seg…
          </Text>
        </View>
        <View style={[styles?.pill, {borderColor: colors?.accent?.lightGrey}]}>
          <Text style={[styles?.pillText, {color: colors?.accent?.grey}]}>
            +2 More
          </Text>
        </View>
      </View>
      <View style={styles?.buttonSection}>
        <View style={[styles?.bottomLeftText,{backgroundColor : colors?.accent?.shadowColor}]}>

        <Text style={{color : colors?.secondary?.yellow,fontSize : 17,fontWeight : 'bold'}}>Sponsored</Text>
        </View>
        <Button
          text="Contact Hospital"
          buttonColor={colors?.accent?.white}
          buttonTextColor={colors?.primary?.blue}
          buttonVerticalPadding = {8}
          buttonWidth = '55%'
          outlineColor ={colors?.accent?.lightGrey}
          fontSize = {19}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingHorizontal: '4%',
    marginHorizontal: '5%',
    borderRadius: 15,
    flexDirection: 'column',
    paddingTop : '5%',
    elevation : 1,
    marginBottom : '5%',
    zIndex : 1
  },
  upperContent: {
    flexDirection: 'row',
  },
  topLeftCardSection: {},
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  votes: {
    marginTop: '10%',
    fontSize: 15,
    textAlign : 'center'
  },
  feedBack: {
    fontSize: 16,
  },

  topRightCardSection: {
    marginLeft: '5%',
  },
  drName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom : '5%'
  },
  drInfoSection: {
    borderWidth: 1,
    borderRadius: 10,
    width: 180,
    paddingLeft: '5%',
    paddingVertical: '3%',
    marginBottom : '7%'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom : '3%'
  },
  fee: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom : '9%'
  },
  cardBottomPills: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pill: {
    paddingVertical: '1.5%',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: '4%',
    marginBottom : '7%'
  },
  pillText: {
    textAlign: 'center',
  },
  bottomLeftText : {
    marginLeft : -15,
    paddingVertical : '1.8%',
    borderTopRightRadius : 30,
    borderBottomRightRadius : 30,
    width : '36%',
    paddingHorizontal : '3%',
  },
  buttonSection : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginBottom : '8%'
  },
});
