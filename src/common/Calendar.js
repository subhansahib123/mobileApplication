import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import CalendarStrip from 'react-native-calendar-strip';
import { useSelector } from 'react-redux';


export default function Calendar() {

    const {colors} = useSelector(state => state);

  return <View style={{flex : 1}}>

  <CalendarStrip
  scrollable
  style={styles?.calendarStyle}
  calendarColor={colors?.secondary?.red}
  calendarHeaderStyle={[
    styles?.calendarHdStyle,
    {color: colors?.accent?.white},
  ]}
  showDate
  dateNumberStyle={[styles?.dateNumStyle, {color: colors?.accent?.dark}]}
  dateNameStyle={[styles?.dateNmStyle, {color: colors?.accent?.dark}]}
  iconContainer={{flex: 0.1}}
  //   onDateSelected={val => setSelected(!slected)}
/>
  </View>  
}

const styles = StyleSheet.create({
    calendarStyle: {
        height: '25%',
        marginHorizontal: '5%',
        borderRadius: 15,
        marginTop: '5%',
      },
      calendarHdStyle: {
        fontSize: 20,
        marginTop: 17,
      },
      dateNumStyle: {
        fontSize: 19,
      },
      dateNmStyle: {
        fontSize: 13,
      },
      boxWrappper: {
        marginHorizontal: '5%',
        marginTop: '10%',
        borderRadius: 15,
      },
      headerText: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold',
        marginVertical: '5%',
      },
})