import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React,{useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

/// Images
import homeIcon from '../assets/images/homeIcon.png'
import homeIconSelected from '../assets/images/homeIconSelected.png'
import messageIcon from '../assets/images/messageIcon.png'
import messageIconSelected from '../assets/images/messageIconSelected.png'
import accountIcon from '../assets/images/accountIcon.png'
import accountIconSelected from '../assets/images/accountIconSelected.png'



/// Pages
import LandingPage from '../screens/Frontend/landingPage/LandingPage';
import Chat from '../screens/Frontend/chat/Chat';
import Profile from '../screens/Frontend/account/Profile';


export default function BottomTabs({navigation}) {

  const [active,setActive] = useState()

  const Tabs = createBottomTabNavigator();
  const {colors} = useSelector(state => state);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopRightRadius: 15,borderTopLeftRadius : 15,height : '7.5%'},
      }}>
      <Tabs.Screen
        name="Landing Page"
        component={LandingPage}
        
        options={{
          tabBarIcon: ({focused})=><Image source={focused ? homeIconSelected : homeIcon} resizeMode='contain' style={{flex : .5,}} />,
          tabBarShowLabel: true,
          tabBarLabel : 'Home',
          tabBarLabelStyle : {fontWeight : 'bold',fontSize : 12},
          tabBarActiveTintColor : colors?.accent?.dark
          
        }}
        
        />
      <Tabs.Screen
        name="Chat"
        component={Chat}
        
        options={{
          tabBarIcon: ({focused})=><Image source={focused ? messageIconSelected : messageIcon} resizeMode='contain' style={{flex : .5,}} />,
          tabBarShowLabel: true,
          tabBarLabelStyle : {fontWeight : 'bold',fontSize : 12},
          tabBarActiveTintColor : colors?.accent?.dark
        }}

      />
      <Tabs.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarIcon: ({focused})=><Image source={focused ? accountIconSelected : accountIcon} resizeMode='contain' style={{flex : .5,}} />,

          tabBarShowLabel: true,
          tabBarLabelStyle : {fontWeight : 'bold',fontSize : 12},
          tabBarActiveTintColor : colors?.accent?.dark

        }}
      />
    </Tabs.Navigator>
  );
}
