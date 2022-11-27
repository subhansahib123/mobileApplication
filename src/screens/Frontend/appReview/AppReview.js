import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import RatingStars from '../../../common/RatingStars';

export default function AppReview() {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles.boxWrapper1, {backgroundColor: colors?.accent?.white}]}>
        <Text style={[styles.headerText, {color: colors?.accent?.dark}]}>
          Please rate the quality of service for the order
        </Text>
        <RatingStars size={40} editable={false} sValue={3.5}/>
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>
            Your comments and suggestions help us improve the service quality
            better!
          </Text>
        </View>
        <View style={styles.textAreaWrapper}>
          <TextInput 
          placeholder='Enter Your note here'
          multiline = {true}
          numberOfLines ={4}
          placeholderTextColor ={colors?.accent?.lightDark}
          style={[styles.textArea,{backgroundColor : colors?.accent?.shadowColor}]}
          
          />
        </View>
        <TouchableOpacity activeOpacity={.8} style={[styles.buttonWrapper,{backgroundColor : colors?.gradients?.lightBlue?.second}]}>
          <Text style={[styles.buttonText,{color : colors?.accent?.white}]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWrapper1: {
    marginHorizontal: '5%',
    marginTop: '6%',
    borderRadius: 15,
    paddingHorizontal: '2%',
    // minHeight : '80%'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  bottomTextWrapper : {
    marginHorizontal : '3%',
    marginTop : '7%'
  },
  bottomText : {
    textAlign : 'center',
    fontSize : 17
  },
  textAreaWrapper : {
    marginVertical : '10%',
    marginHorizontal : '3%'   
  },
  textArea : {
    borderRadius : 15,
    paddingHorizontal : 15,
  },
  buttonWrapper : {
    borderRadius : 30,
    paddingVertical: 12,
    marginBottom : '10%'
  },
  buttonText : {
    textAlign : 'center',
    fontSize : 19,
    fontWeight : '600',
  }
});
