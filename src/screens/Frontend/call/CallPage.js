import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProfilePic from '../../../assets/images/profile.jpeg';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default function CallPage({navigation}) {
  const {colors} = useSelector(state => state);
    
  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.gradients?.purple?.second},
      ]}>
      <View style={styles?.imageSection}>
        <View
          style={[styles?.imageCircle, {borderColor: colors?.accent?.white}]}>
          <Image
            source={ProfilePic}
            style={{width: '100%', height: '100%', borderRadius: 200 / 2}}
          />
        </View>
      </View>
      <View style={styles?.textSection}>
        <Text style={[styles?.name, {color: colors?.accent?.white}]}>
          John Smith
        </Text>
        <Text style={[styles?.time, {color: colors?.accent?.white}]}>
          25:14
        </Text>
      </View>
      <View style={styles?.iconsSection}>
        <View
          style={[
            styles?.iconCircle,
            {backgroundColor: colors?.secondary?.red},
          ]}>
          <EntypoIcon name="cross" size={40} color={colors?.accent?.white} onPress={()=>navigation.navigate('Review')}/>
        </View>
        <View
          style={[
            styles?.iconCircle,
            {backgroundColor: colors?.accent?.white},
          ]}>

          <FeatherIcon name="message-square" size={40} color={colors?.primary?.blue} />
          </View>
        <View
          style={[
              styles?.iconCircle,
            {backgroundColor: colors?.accent?.white},
        ]}>

              <AntDesignIcon name="sound" size={40} color={colors?.gradients?.purple?.first} />
          </View>
        <View
          style={[
              styles?.iconCircle,
              {backgroundColor: colors?.accent?.white},
            ]}>
              <AntDesignIcon name="adduser" size={40} color={colors?.secondary?.green} />

          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSection: {
    flexBasis: '60%',
    justifyContent: 'flex-start',
  },
  imageCircle: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    borderWidth: 1,
  },
  iconsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconCircle: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  textSection: {
    flexBasis: '8%',
    justifyContent: 'flex-start',
    marginBottom : '6%'
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  time: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
  },
  iconsSection: {
    flexBasis: '10%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
