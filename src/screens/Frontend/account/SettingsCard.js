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
  const {colors} = useSelector(state => state?.color);
  const {isPatient,isDoctor} = useSelector(state => state?.login);

  const navigation = useNavigation();
  const DATA = [
    {
      id: 0,
      text: 'My Doctors',
      redirecTo: 'My Doctors',
      imagePath: favouriteIcon,
      isAllowed : true,
    },
    {
      id: 1,
      text: 'Appointments',
      redirecTo: 'My Doctors',
      imagePath: appointmentIcon,
      isAllowed : true,
    },
    {
      id: 2,
      text: 'Online Consultation',
      redirecTo: 'My Doctors',
      imagePath: consulationIcon,
      isAllowed : true,
    },
    {
      id: 3,
      text: 'Booking History',
      redirecTo: 'Booking History',
      imagePath: appointmentIcon,
      isAllowed : true,
    },
    {
      id: 4,
      text: 'Reminders',
      redirecTo: 'My Doctors',
      imagePath: watchIcon,
      isAllowed : true,
    },
    {
      id: 5,
      text: 'Health interest',
      redirecTo: 'My Doctors',
      imagePath: giftBox,
      isAllowed : true,
    },
    {
      id: 5,
      text: 'My Payments',
      redirecTo: 'My Payments',
      imagePath: walletIcon,
      isAllowed : true,
    },
    {
      id: 6,
      text: 'Offers',
      redirecTo: 'Offers',
      imagePath: offerIcon,
      isAllowed : true,
    },
    {
      id: 7,
      text: 'Members',
      redirecTo: 'MembersList',
      imagePath: offerIcon,
      isAllowed : isPatient,
    },
    {
      id: 8,
      text: 'Schedule',
      redirecTo: 'ScheduleList',
      imagePath: appointmentIcon,
      isAllowed : isDoctor,
    },
    {
      id: 9,
      text: 'Logout',
      lastChild: true,
      redirecTo: 'LogOut',
      isAllowed : true,
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
            <View style={[styles?.routeBox,{display :item?.isAllowed ? 'flex' : 'none'}]}>
              <View style={styles?.leftElement}>

                <Image
                  source={item?.imagePath}
                  resizeMode="contain"
                  style={{width : 27,height : 27}}
                  />
                <Text
                  style={[
                    styles?.routeName,
                    {color: colors?.accent?.lightDark,

                    },
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
            {item?.lastChild  ? (
              ''
            ) : (
              <View
                style={[
                  styles?.horizontalLine,
                  {borderBottomColor: colors?.accent?.lightGrey,display : item?.isAllowed ? 'flex' : 'none'},
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
