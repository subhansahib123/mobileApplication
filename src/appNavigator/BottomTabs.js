import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

/// icons
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

/// Pages
import LandingPage from '../screens/Frontend/landingPage/LandingPage';
import Chat from '../screens/Frontend/chat/Chat';
import Profile from '../screens/Frontend/account/Profile';

export default function BottomTabs({navigation}) {
  const Tabs = createBottomTabNavigator();

  const {colors} = useSelector(state => state);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopRightRadius: 15,borderTopLeftRadius : 15,},
      }}>
      <Tabs.Screen
        name="Landing Page"
        component={LandingPage}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="monitor" color={color} size={30} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({color, size}) => (
            <IonicIcon name="chatbubble-outline" color={color} size={30} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="user" color={color} size={30} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs.Navigator>
  );
}
