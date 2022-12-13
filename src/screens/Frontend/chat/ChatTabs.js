import {Dimensions, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export default function ChatTabs() {

  const navigation = useNavigation()
  const {colors} = useSelector(state => state);
  const {width,height} =Dimensions.get('screen');
  const LENGTH = width * .28;
  const HEIGHT = height * .04

  const DATA = [
    {
      text: 'Messages',
      bgColor: colors?.accent?.white,
      textColor: colors?.primary?.blue,
      id: 0,
      redirecTo : 'Chat',
    },
    {
      text: 'Calls',
      bgColor: colors?.accent?.white,
      textColor: colors?.primary?.blue,
      id: 1,
      redirecTo : 'Call Page',
    },
    {
      text: 'Contacts',
      bgColor: colors?.accent?.white,
      textColor: colors?.primary?.blue,
      redirecTo : 'Call Page',
      id: 2,
    },
  ];

  return <FlatList
        data={DATA}
        keyExtractor={item => item?.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => {
          return (
            <Pressable onPress={()=>navigation.navigate(item?.redirecTo)} style={[styles?.textPills, {backgroundColor: item?.bgColor,width : LENGTH,height : HEIGHT}]}>
              <Text style={[styles?.text, {color: item?.textColor}]}>
                {item?.text}
              </Text>
            </Pressable>
          );
        }}
      />
  
}

const styles = StyleSheet.create({
  textPills: {
    width: 50,
    height: 20,
    borderRadius: 20,
    justifyContent : 'center',
    alignItems : 'center',
    marginRight : 7,
  },
  text: {
    fontSize : 14,
    fontWeight : 'bold',
  },
});
