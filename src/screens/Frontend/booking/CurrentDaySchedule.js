import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import Button from '../../../common/Button';

/// Images
import progressBar from '../../../assets/images/Step1.png';
import ProfilePic from '../../../assets/images/profile.jpeg';

export default function CurrentDaySchedule({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={{flexBasis: '20%', marginTop: '-19%', marginBottom: '7%'}}>
        <Image
          source={progressBar}
          resizeMode="contain"
          style={{width: '100%', height: 300, zIndex: 2}}
        />
      </View>
      <View>
        <View
          style={[
            styles?.timeSlotCardWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <View style={styles?.topSection}>
            <View style={[styles?.drImage, {marginRight: 20}]}>
              <Image
                source={ProfilePic}
                style={{width: '100%', height: '100%', borderRadius: 70 / 2}}
              />
            </View>
            <View style={styles?.textSection}>
              <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
                Dr. Jitendra Raut
              </Text>
              <Text style={{color: colors?.accent?.grey, fontSize: 14}}>
                B.Sc, MBBS, DDVL, MD- Dermitol...
              </Text>
            </View>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey},
            ]}></View>

          <View
            style={[
              styles?.scheduleBox,
              {
                borderColor: colors?.accent?.lightGrey,
                backgroundColor: colors?.accent?.shadowColor,
              },
            ]}>
            <View
              style={[
                styles?.badge,
                {
                  backgroundColor: colors?.gradients?.lightSkyBlue?.second,
                  borderColor: 'transparent',
                },
              ]}>
              <Text style={[styles?.badgeText, {color: colors?.accent?.dark}]}>
                Morning
              </Text>
            </View>
            <View style={styles?.upperLine}>
              <Text style={[styles?.boxText, {color: colors?.accent?.grey}]}>
                Doctor Fees
              </Text>
            </View>
            <View style={styles?.lowerLine}>
              <Text style={[styles?.boxText, {color: colors?.accent?.dark}]}>
                10.00 am - 1.00 pm
              </Text>
              <Text
                style={[
                  styles?.feeText,
                  {
                    color: colors?.accent?.dark,
                    fontWeight: 'bold',
                  },
                ]}>
                $600
              </Text>
            </View>
          </View>
          <View
            style={[
              styles?.scheduleBox,
              {
                borderColor: colors?.accent?.lightGrey,
                backgroundColor: colors?.accent?.shadowColor,
              },
            ]}>
            <View
              style={[
                styles?.badge,
                {
                  backgroundColor: colors?.gradients?.lightSkyBlue?.second,
                  borderColor: 'transparent',
                },
              ]}>
              <Text style={[styles?.badgeText, {color: colors?.accent?.dark}]}>
                Afternoon
              </Text>
            </View>
            <View style={styles?.upperLine}>
              <Text style={[styles?.boxText, {color: colors?.accent?.grey}]}>
                Doctor Fees
              </Text>
            </View>
            <View style={styles?.lowerLine}>
              <Text style={[styles?.boxText, {color: colors?.accent?.dark}]}>
                4.00 pm - 6.00 pm
              </Text>
              <Text
                style={[
                  styles?.feeText,
                  {
                    color: colors?.accent?.dark,
                    fontWeight: 'bold',
                  },
                ]}>
                $600
              </Text>
            </View>
          </View>
          <View
            style={[
              styles?.scheduleBox,
              {
                borderColor: colors?.accent?.lightGrey,
                backgroundColor: colors?.accent?.shadowColor,
              },
            ]}>
            <View
              style={[
                styles?.badge,
                {
                  backgroundColor: colors?.gradients?.lightSkyBlue?.second,
                  borderColor: 'transparent',
                  width: '50%',
                },
              ]}>
              <Text style={[styles?.badgeText, {color: colors?.accent?.dark}]}>
                Evening & Night
              </Text>
            </View>
            <View style={styles?.upperLine}>
              <Text style={[styles?.boxText, {color: colors?.accent?.grey}]}>
                Doctor Fees
              </Text>
            </View>
            <View style={styles?.lowerLine}>
              <Text style={[styles?.boxText, {color: colors?.accent?.dark}]}>
                7.00 pm - 10.00 pm
              </Text>
              <Text
                style={[
                  styles?.feeText,
                  {
                    color: colors?.accent?.dark,
                    fontWeight: 'bold',
                  },
                ]}>
                $600
              </Text>
            </View>
          </View>
        </View>
        <View style={styles?.buttonsSection}>
          <Button
            text="Continue"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={17}
            outlineColor={colors?.primary?.blue}
            fontSize={17}
            handlePress={() => navigation.navigate('Next Day Schedule')}
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
  backDropSection: {
    height: '30%',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    paddingHorizontal: '5%',
  },
  crossIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  timeSlotCardWrapper: {
    borderRadius: 15,
    marginHorizontal: '5%',
    height: '73%',
  },
  topSection: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '10%',
    alignItems: 'center',
  },
  drImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSection: {
    flexBasis: '70%',
  },
  scheduleBox: {
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: '5%',
    paddingHorizontal: '7%',
    marginHorizontal: '5%',
    position: 'relative',
    marginTop: '10%',
  },
  badge: {
    borderWidth: 1,
    borderRadius: 15,
    width: '38%',
    alignItems: 'center',
    paddingVertical: '.5%',
    position: 'absolute',
    top: -10,
    left: 17,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  boxText: {
    fontSize: 14,
  },
  feeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  upperLine: {
    alignItems: 'flex-end',
  },
  lowerLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsSection: {
    marginHorizontal: '5%',
    marginTop: '8%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
