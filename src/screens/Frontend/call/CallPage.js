import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProfilePic from '../../../assets/images/profile.jpeg';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

/// Images
import roundedCrossIcon from '../../../assets/images/roundedCrossIcon.png';
import messageIcon from '../../../assets/images/message.png';
import loudIcon from '../../../assets/images/loudIcon.png';
import addCallerIcon from '../../../assets/images/addCaller.png';

export default function CallPage({navigation}) {
  const {colors} = useSelector(state => state?.color);

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
        <Pressable onPress={()=>navigation?.navigate('Review')} style={{marginBottom : '-5%'}}>
          <Image
            source={roundedCrossIcon}
            resizeMode="contain"
            style={{width: 100, height: 100}}
          />
        </Pressable>
        <View style={{marginRight : 10}}>
          <Image
            source={messageIcon}
            resizeMode="contain"
            style={{width: 67, height: 67}}
          />
        </View>
        <View style={{marginRight : 10}}>
          <Image
            source={loudIcon}
            resizeMode="contain"
            style={{width: 67, height: 67}}
          />
        </View>
        <View style={{marginRight : 10}}>
          <Image
            source={addCallerIcon}
            resizeMode="contain"
            style={{width: 67, height: 67}}
          />
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
  },
  textSection: {
    flexBasis: '8%',
    justifyContent: 'flex-start',
    marginBottom: '6%',
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
