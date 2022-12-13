import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'

import {DATA} from '../screens/Frontend/booking/dummyData';

/// Images
import ProfilePic from '../assets/images/profile.jpeg';
import messageIcon from '../assets/images/message.png';

export default function BookingHistoryCard({navigator}) {
  const {colors} = useSelector(state => state);
  const {width, height} = Dimensions?.get('screen');
  const LENGHT = width * 0.9;
  const HEIGHT = height * 0.27;

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item?.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View
            style={[
              styles?.boxWrapper,
              {
                backgroundColor: colors?.accent?.white,
                width: LENGHT,
                height: HEIGHT,
              },
            ]}>
            <View style={styles?.topSection}>
              <View
                style={[
                  styles?.badgeCircle,
                  {backgroundColor: colors?.accent?.shadowColor},
                ]}>
                <Image
                  source={ProfilePic}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 80 / 2,
                  }}
                />
              </View>
              <View style={styles?.centeredText}>
                <View style={styles?.titleSection}>
                  <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
                    Selin Jose
                  </Text>
                </View>
                <View
                  style={[
                    styles?.infoBox,
                    {borderColor: colors?.accent?.lightGrey},
                  ]}>
                  <Text style={[styles?.drInfo, {color: colors?.accent?.grey}]}>
                    MBBS,DOMS,MS
                  </Text>
                  <Text style={[styles?.drInfo, {color: colors?.accent?.grey}]}>
                    Ophthalmologist
                  </Text>
                  <Text style={[styles?.drInfo, {color: colors?.accent?.grey}]}>
                    26 years of experience
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles?.bottomSection}>
              <Text
                style={[
                  styles?.available,
                  {
                    color:
                      item?.status == 'active'
                        ? colors?.secondary?.green
                        : colors?.secondary?.red,
                  },
                ]}>
                {item?.schedule}
              </Text>
              <Text style={[styles?.available, {color: colors?.accent?.dark}]}>
                9:30AM - 08:00PM
              </Text>
              <TouchableOpacity activeOpacity={.6} onPress={()=>navigator.navigate('Chat')}>

              <Image
                source={messageIcon}
                resizeMode="contain"
                style={{width: 50, height: 50}}
                
                />
                </TouchableOpacity>
                <View style={[styles?.iconCircle,{backgroundColor : colors?.accent?.white,borderColor : colors?.accent?.lightGrey}]}>
                  <Ionicons name='ios-call-outline' size={21} color ={colors?.primary?.blue} onPress={()=>navigator.navigate('Call Page')}/>
                </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  boxWrapper: {
    borderRadius: 15,
    marginBottom: '6%',
  },
  topSection: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  badgeCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  drName: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  infoBox: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    marginTop: '3%',
  },
  drInfo: {
    fontSize: 15,
  },

  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredText: {
    marginLeft: 15,
    flexBasis: '70%',
  },
  rightText: {
    marginRight: '-10%',
  },
  crossCircle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '4%',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  available: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
