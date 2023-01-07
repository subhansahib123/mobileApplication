import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function BookingHistoryTabs() {
  const {colors} = useSelector(state => state?.color);
  const {width, height} = Dimensions.get('screen');
  const LENGTH = width * 0.28;
  const HEIGHT = height * 0.045;

  const DATA = [
    {
      text: 'Active',
      bgColor: colors?.accent?.white,
      textColor: colors?.accent?.dark,
      id: 0,
      firsChild: true,
    },
    {
      text: 'Complete',
      bgColor: colors?.accent?.white,
      textColor: colors?.accent?.dark,
      id: 1,
    },
    {
      text: 'Cancelled',
      bgColor: colors?.accent?.white,
      textColor: colors?.accent?.dark,
      id: 2,
    },
    {
      text: 'Archived',
      bgColor: colors?.accent?.white,
      textColor: colors?.accent?.dark,
      id: 3,
    },
  ];

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item?.id}
      showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={({item}) => {
        return (
          <View
            style={[
              styles?.textPills,
              {backgroundColor: item?.bgColor, width: LENGTH, height: HEIGHT,marginLeft : item?.firsChild ? 15 : 0},
            ]}>
            <Text style={[styles?.text, {color: item?.textColor}]}>
              {item?.text}
            </Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textPills: {
    width: 50,
    height: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  text: {
    fontSize: 17,
  },
});
