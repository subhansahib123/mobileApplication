import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import EntypoIcon from "react-native-vector-icons/Entypo"

import BookingHistoryTabs from './BookingHistoryTabs';
import BookingHistoryCard from '../../../common/BookingHistoryCard';

/// Images
import crossIcon from '../../../assets/images/cross.png';



export default function BookingHistory() {

    const {colors} = useSelector(state => state);

  return (
    <View style={[styles?.container,{backgroundColor : colors?.accent?.shadowColor}]}>
      <View style={[styles?.backDropSection,{backgroundColor : colors?.primary?.blue}]}>
        <View style={styles?.crossIconSection}>
<Image source={crossIcon} resizeMode='contain' style={{width : 22,height : 22,marginLeft : 10,marginRight : 10}}/>
        <Text style={[styles?.header,{color : colors?.accent?.white}]}>Booking History</Text>
        </View>
      </View>
        <View style ={[styles?.tabsSection]}>
            <BookingHistoryTabs />
        </View>
        <View style={styles?.messageBoxesSec}>
        <BookingHistoryCard />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    backDropSection : {
        height : '20%',
        borderBottomLeftRadius : 35,
        borderBottomRightRadius : 35,
    },
    crossIconSection : {
        paddingHorizontal : '5%',
        flexDirection : 'row',
        alignItems : 'center',
        marginTop : '10%'
    },
    header : {
        fontSize : 27,
        fontWeight : 'bold',
        marginLeft : 10,
    },
    tabsSection : {
        position : 'relative',
        top : '-2.5%',
        marginBottom : '-12%',
        zIndex : 1
    },
    messageBoxesSec : {
        paddingHorizontal : '5%',
        flex : 1,
        
    },
})