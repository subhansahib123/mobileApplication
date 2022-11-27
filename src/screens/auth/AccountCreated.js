import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function AccountCreated({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View></View>
      <View
        style={[styles.boxWrapper2, {backgroundColor: colors.accent.white}]}>
        <Text style={[styles.headerText, {color: colors.accent.dark}]}>
          Account Created!
        </Text>
        <Text style={[styles.captionText,{color : colors?.accent?.grey}]}>
          Your account had beed created successfully. {'\n'} Please sign in to
          use your account and enjoy
        </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('BottomTabs') }
          activeOpacity={0.8}
          style={[
            styles.buttonWrapper,
            {backgroundColor: colors.gradients.lightBlue?.second},
          ]}>
          <Text style={[styles.buttonText, {color: colors.accent.white}]}>
            Take me to Home Page
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxWrapper2: {
    marginHorizontal: '5%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderRadius: 15,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold',
  },
  captionText: {
    textAlign: 'center',
    marginTop: '8%',
    marginBottom: '12%',
    fontSize: 19,
    lineHeight: 25,
  },
  buttonWrapper: {
    borderRadius: 30,
    paddingVertical: '6%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
