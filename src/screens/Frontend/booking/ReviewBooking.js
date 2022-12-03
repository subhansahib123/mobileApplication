import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Button from '../../../common/Button';

/// Images
import ProfilePic from '../../../assets/images/profile.jpeg';
import progressBar from '../../../assets/images/Step4.png'


export default function ReviewBooking({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
        <View style={{flexBasis : '20%',marginTop : '-20%',marginBottom : '7%'}}>
          <Image source={progressBar} resizeMode='contain' style={{width :'100%',height : 300,zIndex : 2}}/>
        </View>
      <View
        style={[
          styles?.bookingReviewCard,
          {backgroundColor: colors?.accent?.white},
        ]}>
        <View style={styles?.topSection}>
          <View style={[styles?.drImage]}>
            <Image
              source={ProfilePic}
              style={{width: '100%', height: '100%', borderRadius: 70 / 2}}
            />
          </View>
          <View>
            <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
              Dr. Jitendra Raut
            </Text>
            <Text style={{color: colors?.accent?.grey}}>
              B.Sc, MBBS, DDVL, MD- Dermitol...
            </Text>
          </View>
        </View>
        <View style={styles?.bottomSection}>
          <View style={styles?.dateSection}>
            <Text style={[styles?.headingText, {color: colors?.accent?.dark}]}>
              Date and Time
            </Text>
            <Text style={{color: colors?.accent?.dark}}>
              Tuesday, 09 May, 2022
            </Text>
            <Text style={{color: colors?.accent?.grey}}>12:30 AM</Text>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey},
            ]}></View>
          <View style={styles?.hpNameSection}>
            <Text style={[styles?.headingText, {color: colors?.accent?.dark}]}>
              Hospital Name
            </Text>
            <Text style={{color: colors?.accent?.dark}}>Department Name</Text>
            <Text style={{color: colors?.accent?.grey}}>
              Country, State, City
            </Text>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey},
            ]}></View>
          <View style={styles?.costSection}>
            <Text style={[styles?.headingText, {color: colors?.accent?.dark}]}>
              Cost
            </Text>
            <Text style={{color: colors?.accent?.dark}}>Cost $600.00</Text>
            <View style={styles?.multipliedValue}>
              <Text style={{color: colors?.accent?.dark}}>Hourly $300 x 2</Text>
              <Text style={[styles?.multipleText,{color: colors?.accent?.dark}]}>$600.00</Text>
            </View>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey},
            ]}></View>
          <View style={[styles?.multipliedValue,{paddingVertical : '2%'}]}>
            <Text style={[styles?.grTotalText,{color: colors?.accent?.dark}]}>Grand Total</Text>
            <Text style={[styles?.multipleText,{color: colors?.primary?.blue}]}>$600.00</Text>
          </View>
          
        </View>
        
      </View>
      <View style={styles?.buttonSection}>
          <Button
            text="Continue"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={15}
            outlineColor={colors?.accent?.lightGrey}
            // buttonWidth={90}
            handlePress = {()=>navigation.navigate('Payment Method')}
          />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookingReviewCard: {
    marginHorizontal: '5%',
    borderRadius: 15,
    // marginTop: '25%',
    paddingBottom : '10%'
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  drImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 20,
  },
  drName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSection: {
    paddingHorizontal: '5%',
    marginTop: '10%',
  },
  dateSection: {
    paddingVertical : '2%'
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
  },
  hpNameSection: {
    paddingVertical: '2%',
  },
  costSection: {
    paddingVertical: '2%',
  },
  multipliedValue : {
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  multipleText : {
    fontSize : 16,
    fontWeight : 'bold'
  },
  grTotalText : {
    fontSize : 18,
    fontWeight : 'bold'
  },
  buttonSection : {
    paddingHorizontal : '5%',
    marginTop : '15%'
  },
});
