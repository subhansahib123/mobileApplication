import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import ProfilePic from '../../../assets/images/profile.jpeg';
import RatingStars from './../../../common/RatingStars';
import Button from '../../../common/Button';

/// Images
import crossIcon from '../../../assets/images/cross.png'



export default function DrRating({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.backDropSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
        <View style={styles?.crossIconSection}>
        <Image source={crossIcon} resizeMode='contain' style={{flex : .09,marginLeft : 10,marginRight : 10}}/>
          <Text style={[styles?.header, {color: colors?.accent?.white}]}>
            Review
          </Text>
        </View>
      </View>
      <View style={{top: '-27%'}}>
        <View
          style={[
            styles?.ratingCardWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <Text style={[styles?.doctor, {color: colors?.accent?.dark}]}>
            Doctor
          </Text>
          <View style={styles?.topSection}>
            <View style={[styles?.drImage,{marginRight: 20,}]}>
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
              <View style={styles?.ratingStars}>
                <RatingStars size={14} readonly={true} sValue={4.5} />
                <Text
                  style={[styles?.ratingValue, {color: colors?.accent?.dark}]}>
                  4.9
                </Text>
              </View>
            </View>
          </View>
          <View style={styles?.ratingSection}>
            <Text style={[styles?.questText, {color: colors?.accent?.grey}]}>
              How was your session?
            </Text>
            <RatingStars size={32} readonly={false} sValue={3} />
          </View>
          <View
            style={[
              styles?.textArea,
              {borderColor: colors?.accent?.lightGrey},
            ]}>
            <TextInput
              multiline={true}
              numberOfLines={7}
              placeholder="Write Something"
              placeholderTextColor={colors?.accent?.grey}
              style={[
                styles?.textInput,
                {
                  backgroundColor: colors?.accent?.shadowColor,
                  color: colors?.accent?.dark,
                },
              ]}
            />
          </View>
        </View>
        <View
          style={styles?.buttonsSection}>
          <Button
            text="Submit"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={17}
            outlineColor={colors?.primary?.blue}
            fontSize={17}
            buttonWidth = '75%'
              handlePress={()=>navigation.navigate('Landing Page')}
          />
          <View
            style={[styles?.drImage, {backgroundColor: colors?.accent?.white,elevation : 5}]}>
            <EntypoIcon name="cross" size={40} color={colors?.primary?.blue} />
          </View>
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
    height: '45%',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    paddingHorizontal: '5%',
  },
  crossIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  ratingCardWrapper: {
    borderRadius: 15,
    marginHorizontal: '5%',
  },
  doctor: {
    paddingHorizontal: '3%',
    paddingTop: '5%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  topSection: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '5%',
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
  ratingStars: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '1%',
  },
  ratingValue: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingSection: {
    marginTop: '15%',
    alignItems: 'center',
  },
  questText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: '5%',
    marginTop: '7%',
    marginBottom: '15%',
  },
  textInput: {
    borderRadius: 15,
    textAlignVertical: 'top',
    paddingHorizontal: '5%',
  },
  buttonsSection : {
    marginHorizontal : '5%',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    marginTop : '20%'
  },
});
