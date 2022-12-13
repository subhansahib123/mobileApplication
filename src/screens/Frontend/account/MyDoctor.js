import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import BookingHistoryCard from '../../../common/BookingHistoryCard';    

import EntypoIcon from 'react-native-vector-icons/Entypo'
///Images
import crossIcon from '../../../assets/images/cross.png';


export default function MyDoctor({navigation}) {
    const {colors} = useSelector(state => state);

    return (
      <View style={[styles?.container,{backgroundColor : colors?.accent?.shadowColor}]}>
        <View style={[styles?.backDropSection,{backgroundColor : colors?.primary?.blue}]}>
          <View style={styles?.crossIconSection}>
            <Image source={crossIcon} resizeMode='contain' style={{width : 18,height : 18,marginLeft : 10,marginRight : 10}}/>
          <Text style={[styles?.header,{color : colors?.accent?.white}]}>My Doctor</Text>
          </View>
        </View>
          <View style={styles?.messageBoxesSec} >
          <BookingHistoryCard navigator = {navigation}/>
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
        fontSize : 22,
        fontWeight : 'bold',
        marginLeft : 10,
    },
    messageBoxesSec : {
        paddingHorizontal : '5%',
        marginTop : '3%',
        flex : 1,
        position : 'relative',
        top : '-5%',
        marginBottom : '-10%'
    },
})