import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/// Redux
import {colors} from '../common/Colors';
import {useDispatch} from 'react-redux';
import {setColors} from '../store/features/colors/ColorSlice';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

/// Pages
import StartUp1 from '../screens/Frontend/home/StartUp1';
import StartUp2 from '../screens/Frontend/home/StartUp2';
import StartUp3 from '../screens/Frontend/home/StartUp3';
import BottomTabs from './BottomTabs';
import OTP from './../screens/auth/otp/OTP';
import Login from './../screens/auth/login/Login';
import Search from '../screens/Frontend/search/Search';
import City from '../screens/Frontend/city/City';
import Language from '../screens/Frontend/lang/Language';
import Speciality from '../screens/Frontend/specialist/Speciality';
import HopitalInfoPage from '../screens/Frontend/hospital/HopitalInfoPage';
import ProfilePage from '../screens/Frontend/drProfile/ProfilePage';
import BookingReview from '../screens/Frontend/booking/BookingReview';
import ReviewBooking from '../screens/Frontend/booking/ReviewBooking';
import AddPayment from './../screens/Frontend/payment/AddPayment';
import PaymentMethod from './../screens/Frontend/payment/PaymentMethod';
import BookingSucces from '../screens/Frontend/booking/BookingSucces';
import DrRating from '../screens/Frontend/booking/DrRating';
import CallPage from '../screens/Frontend/call/CallPage';
import BookingHistory from './../screens/Frontend/booking/BookingHistory';
import MyDoctor from '../screens/Frontend/account/MyDoctor';
import MyPayments from '../screens/Frontend/payment/MyPayments';
import Offers from '../screens/Frontend/account/Offers';
import TimeSlot from '../screens/Frontend/booking/TimeSlot';
import CurrentDaySchedule from '../screens/Frontend/booking/CurrentDaySchedule';
import NextDaySchedule from '../screens/Frontend/booking/NextDaySchedule';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setColors(colors));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startup1">
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Startup1"
          component={StartUp1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Startup2"
          component={StartUp2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Startup3"
          component={StartUp3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bottom Tabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="City"
          component={City}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Speciality"
          component={Speciality}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HospitalInfo"
          component={HopitalInfoPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking Review"
          component={BookingReview}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: colors?.primary?.blue,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: colors?.accent?.shadowColor},
          }}
        />
        <Stack.Screen
          name="Review Booking"
          component={ReviewBooking}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: colors?.primary?.blue,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: colors?.accent?.shadowColor},
          }}
        />
        <Stack.Screen
          name="Payment Method"
          component={AddPayment}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: colors?.primary?.blue,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: colors?.accent?.shadowColor},
          }}
        />
        <Stack.Screen
          name="Add Payment Method"
          component={PaymentMethod}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: colors?.primary?.blue,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerStyle: {backgroundColor: colors?.accent?.shadowColor},
          }}
        />
        <Stack.Screen
          name="Booking Success"
          component={BookingSucces}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Review"
          component={DrRating}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Call Page"
          component={CallPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Booking History"
          component={BookingHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="My Doctors"
          component={MyDoctor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="My Payments"
          component={MyPayments}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Offers"
          component={Offers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Time Slot"
          component={TimeSlot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Current Day Schedule"
          component={CurrentDaySchedule}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: colors?.primary?.blue,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTitle : 'Select a time slot',
            headerStyle: {backgroundColor: colors?.accent?.shadowColor},
          }}
        />
        <Stack.Screen
          name="Next Day Schedule"
          component={NextDaySchedule}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: colors?.primary?.blue,
              fontSize: 22,
              fontWeight: 'bold',
            },
            headerTitle : 'Select a time slot',
            headerStyle: {backgroundColor: colors?.accent?.shadowColor},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
