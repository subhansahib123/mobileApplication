import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';



export default function BackDrop(props) {
  const {colors} = useSelector(state => state);

  const {navigator} = props

  return (
    <>
      <View style={[styles?.topBox, {backgroundColor: colors?.primary?.blue}]}>
        <View style={styles?.topTextWrapper}>
          <Text style={[styles?.topText, {color: colors?.accent?.white}]}>
            Home
          </Text>

          <View style={styles?.dropDownSection}>
            <Pressable onPress={()=>navigator.navigate('Search')}
              style={[
                styles?.searchBox,
                {backgroundColor: colors?.accent?.white},
              ]}>
              <FontAwesomeIcon
                name="search"
                size={15}
                color={colors?.primary?.violet}
              />
            </Pressable>
            <Pressable onPress={()=>navigator.navigate('City')}>
              <Text style={[styles?.dropDownText, {color: colors?.accent?.white}]}>

              Country
              </Text>
            </Pressable>
            <FontAwesomeIcon
              name="chevron-down"
              size={10}
              color={colors?.accent?.white}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topBox: {
    // flexBasis: '22%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  topTextWrapper: {
    marginLeft: '10%',
    marginTop: '12%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom : '22%'
  },
  dropDownSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -27,
    paddingBottom : '20%'
  },
  dropDownText: {
    fontSize: 15,
    fontWeight: '600',
    marginRight: 5,
    marginLeft: 7,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '32%',
    height: '43%',
    borderRadius: 5,
    paddingHorizontal: '3%',
  },
});
