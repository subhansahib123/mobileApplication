import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import EntypoIcon from 'react-native-vector-icons/Entypo'

import ChatTabs from './ChatTabs';
import MessageBoxes from './MessageBoxes';

/// Images
import crossIcon from '../../../assets/images/cross.png';

export default function Chat() {

    const {colors} = useSelector(state => state);

  return (
    <View style={[styles?.container,{backgroundColor : colors?.accent?.shadowColor}]}>
      <View style={[styles?.backDropSection,{backgroundColor : colors?.primary?.blue}]}>
        <View style={styles?.crossIconSection}>
            <Image source={crossIcon} resizeMode='contain' style={{flex : .09,marginLeft : 10,marginRight : 10}}/>
        <Text style={[styles?.header,{color : colors?.accent?.white}]}>Chat</Text>
        </View>
      </View>
        <View style ={styles?.tabsSection}>
            <ChatTabs />
        </View>
        <View style={styles?.messageBoxesSec}>
        <MessageBoxes />
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
        paddingHorizontal : '5%',
        position : 'relative',
        top : '-2%',
        marginBottom : '-12%',
        zIndex : 2
    },
    messageBoxesSec : {
        paddingHorizontal : '5%',
        marginTop : '3%',
        flex : 1,
    },
})