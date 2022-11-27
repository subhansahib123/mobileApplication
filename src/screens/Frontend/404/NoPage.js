import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function NoPage() {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View></View>
      <View
        style={[styles.boxWrapper2, {backgroundColor: colors.accent.white}]}>
        <Text style={[styles.headerText,{color : colors.accent.dark}]}>No internet {'\n'} connection available</Text>
        <Text style={[styles.captionText,{color : colors?.accent?.grey}]}>
          Your device is not connected to internet, please make sure your
          connection is working.
        </Text>
        <TouchableOpacity activeOpacity={.8} style={[styles.buttonWrapper,{backgroundColor : colors.gradients.lightBlue?.second}]}>
            <Text style={[styles.buttonText,{color : colors.accent.white}]}>Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  boxWrapper2: {
    marginHorizontal : '5%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderRadius : 15
  },
  headerText : {
    textAlign : 'center',
    fontSize : 32,
    fontWeight : 'bold',
  },
  captionText : {
    textAlign : 'center',
    marginVertical : '8%',
    fontSize : 19
  },
  buttonWrapper : {
    borderRadius : 30,
    paddingVertical : '6%'
  },
  buttonText : {
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : 16,
  }
});
