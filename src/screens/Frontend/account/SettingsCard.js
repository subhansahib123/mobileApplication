import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontisoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function SettingsCard({}) {
  const {colors} = useSelector(state => state);
  const navigation = useNavigation()
  const DATA = [
    {
      id: 0,
      text: 'My Doctors',
      iconName: 'bookmark',
      redirecTo: 'My Doctors',
    },
    {
      id: 1,
      text: 'Appointments',
      iconName: 'calendar',
      redirecTo: 'My Doctors',
    },
    {
      id: 2,
      text: 'Online Consultation',
      iconName: 'doctor',
      redirecTo: 'My Doctors',
    },
    {
      id: 3,
      text: 'Booking History',
      iconName: 'prescription',
      redirecTo: 'Booking History',
    },
    {id: 4, text: 'Reminders', iconName: 'date', redirecTo: 'My Doctors'},
    {
      id: 5,
      text: 'Health interest',
      iconName: 'stethoscope',
      redirecTo: 'My Doctors',
    },
    {id: 5, text: 'My Payments', iconName: 'wallet', redirecTo: 'My Payments'},
    {
      id: 6,
      text: 'Offers',
      iconName: 'shopping-package',
      lastChild: true,
      redirecTo: 'Offers',
    },
  ];

  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
      {DATA.map((item, index) => {
        return (
          <Pressable onPress={()=>navigation.navigate(item?.redirecTo)}  key={index}>
            <View style={styles?.routeBox}>
              <View style={styles?.leftElement}>
                <FontisoIcon
                  name={item?.iconName}
                  size={20}
                  color={colors?.gradients?.purple?.first}
                  style={{flexBasis: '8%'}}
                />
                <Text
                  style={[
                    styles?.routeName,
                    {color: colors?.accent?.lightDark},
                  ]}>
                  {item?.text}
                </Text>
              </View>
              <View style={styles?.rightElement}>
                <FontAwesomeIcon
                  name="angle-right"
                  size={20}
                  color={colors?.accent?.dark}
                />
              </View>
            </View>
            {item?.lastChild ? (
              ''
            ) : (
              <View
                style={[
                  styles?.horizontalLine,
                  {borderBottomColor: colors?.accent?.lightGrey},
                ]}></View>
            )}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    // height: '50%',
    borderRadius: 25,
    marginHorizontal: '6%',
  },
  routeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: '8%',
  },
  leftElement: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routeName: {
    marginLeft: 25,
    fontSize: 19,
    // fontWeight : 'bold'
  },
  rightElement: {},
  horizontalLine: {
    borderBottomWidth: 1,
    marginHorizontal: '3%',
  },
});
