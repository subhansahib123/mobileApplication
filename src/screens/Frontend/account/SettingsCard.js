import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import FontisoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

/// Images
import favouriteIcon from '../../../assets/images/favourite.png';
import appointmentIcon from '../../../assets/images/calendar.png';
import consulationIcon from '../../../assets/images/userProfile.png';
import watchIcon from '../../../assets/images/wristwatch.png';
import walletIcon from '../../../assets/images/paymentCard.png';
import offerIcon from '../../../assets/images/wand.png';
import giftBox from '../../../assets/images/giftBox.png';

export default function SettingsCard({}) {
  const {colors} = useSelector(state => state);
  const navigation = useNavigation();
  const DATA = [
    {
      id: 0,
      text: 'My Doctors',
      iconName: 'bookmark',
      redirecTo: 'My Doctors',
      imagePath: favouriteIcon,
    },
    {
      id: 1,
      text: 'Appointments',
      iconName: 'calendar',
      redirecTo: 'My Doctors',
      imagePath: appointmentIcon,
    },
    {
      id: 2,
      text: 'Online Consultation',
      iconName: 'doctor',
      redirecTo: 'My Doctors',
      imagePath: consulationIcon,
    },
    {
      id: 3,
      text: 'Booking History',
      iconName: 'prescription',
      redirecTo: 'Booking History',
      imagePath: appointmentIcon,
    },
    {
      id: 4,
      text: 'Reminders',
      iconName: 'date',
      redirecTo: 'My Doctors',
      imagePath: watchIcon,
    },
    {
      id: 5,
      text: 'Health interest',
      iconName: 'stethoscope',
      redirecTo: 'My Doctors',
      imagePath: giftBox,
    },
    {
      id: 5,
      text: 'My Payments',
      iconName: 'wallet',
      redirecTo: 'My Payments',
      imagePath: walletIcon,
    },
    {
      id: 6,
      text: 'Offers',
      iconName: 'shopping-package',
      lastChild: true,
      redirecTo: 'Offers',
      imagePath: offerIcon,
    },
  ];

  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
      {DATA.map((item, index) => {
        return (
          <Pressable
            onPress={() => navigation.navigate(item?.redirecTo)}
            key={index}>
            <View style={styles?.routeBox}>
              <View style={styles?.leftElement}>

                <Image
                  source={item?.imagePath}
                  resizeMode="contain"
                  style={{width : 27,height : 27}}
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
    flex: 1,
  },
  routeName: {
    marginLeft: 25,
    fontSize: 16,
    // fontWeight : 'bold'
  },
  rightElement: {},
  horizontalLine: {
    borderBottomWidth: 1,
    marginHorizontal: '3%',
  },
});
