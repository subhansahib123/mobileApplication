import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import Button from '../../../common/Button';

/// Image
import thumbIcon  from '../../../assets/images/thumb.png'

export default function BookingSucces({navigation}) {
  const {colors} = useSelector(state => state?.color);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.backDropIconSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
          <Image source={thumbIcon} resizeMode = 'contain' style={{width : 160,height : 160,marginBottom : '10%'}}/>
      </View>
      <View
        style={[
          styles?.bookingSuccessCard,
          {backgroundColor: colors?.accent?.white},
        ]}>
        <Text style={[styles?.headerText,{color : colors?.accent?.dark}]}>Booking Success</Text>
        <Text style={[styles?.captionText,{color : colors?.primary?.blue}]}>Booking ID # 125050</Text>
        <Text style={[styles?.bottomText,{color : colors?.accent?.grey}]}>
          Thank you for choosing our service and trusted lawyer to help you with
          your problems
        </Text>
      </View>
        <View style={styles?.buttonsSection}>
        <Button
              text='Review Booking'
              buttonColor={colors?.accent?.white}
              buttonTextColor={colors?.accent?.dark}
              buttonVerticalPadding={17}
              outlineColor={colors?.accent?.lightGrey}
              fontSize ={17}
              />
            <View style={{marginTop : '5%'}}>

        <Button
              text='Back to Home'
              buttonColor={colors?.primary?.blue}
              buttonTextColor={colors?.accent?.white}
              buttonVerticalPadding={17}
              outlineColor={colors?.primary?.blue}
              fontSize ={17}
              handlePress = {()=>navigation.navigate('Landing Page')}
              />
              </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropIconSection: {
    height: '45%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingSuccessCard: {
    marginHorizontal: '5%',
    borderRadius: 15,
    alignItems : 'center',
    paddingHorizontal : '9.5%',
    paddingVertical : '6%',
    top : '-10%'
  },
  headerText : {
    fontSize : 22,
    fontWeight : 'bold'
  },
  captionText : {
    fontSize : 22,
    fontWeight : 'bold',
    marginTop : '1%'
  },
  bottomText : {
    textAlign : 'center',
    fontSize : 14,
    lineHeight : 20,
    marginTop : '2%'
  },
  buttonsSection : {
    paddingHorizontal : '5%'
  },
});
