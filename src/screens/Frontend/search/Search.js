import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

/// Images 
import SearchIcon from '../../../assets/images/searchIcon.png'
import filterIcon from '../../../assets/images/filterIcon.png';
import crossIcon from '../../../assets/images/cross.png'

export default function Search() {
  const {colors} = useSelector(state => state?.color);

  const DATA = [
    {
      id: 0,
      headingText: 'Hospitals',
      captionText: 'Massachusetts, Toronto, etc.',
    },
    {
      id: 1,
      headingText: 'Departments',
      captionText: 'Nephrology, Cyber Knife, Cardiology, etc.',
    },
    {
      id: 2,
      headingText: 'Doctors',
      captionText: 'Jhon steve, Ainnie, etc.',
    },
    
  ];

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.backDropSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
        <View style={styles?.topSection}>
          <View style={styles?.cancelSection}>
            <Image source={crossIcon} resizeMode='contain' style={{flex : .32,marginLeft : 10,marginRight : 10}}/>
            <Text style={[styles?.text, {color: colors?.accent?.white}]}>
              Find & Book
            </Text>
          </View>
          <Image source={filterIcon} resizeMode='contain' style={{flex : .2}}/>
        </View>
        <View
          style={[
            styles?.searchInputWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <Image source={SearchIcon} resizeMode='contain' style={{flex : .3}}/>
          <TextInput
            placeholder="Hospitals, Departments, Doctors"
            placeholderTextColor={colors?.accent?.grey}
            style={{marginLeft: 10,color : colors?.accent?.dark}}
          />
        </View>
      </View>
      <View style={styles?.categoriesSection}>
        <View
          style={[
            styles?.boxWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles?.sectionBox}>
                  <View style={styles?.textSection}>
                    <Text
                      style={[
                        styles?.headingText,
                        {color: colors?.accent?.dark},
                      ]}>
                      {item?.headingText}
                    </Text>
                    <Text
                      style={[
                        styles?.captionText,
                        {color: colors?.accent?.grey},
                      ]}>
                      {item?.captionText}
                    </Text>
                  </View>
                  <View
                    style={[
                      styles?.horizontalLine,
                      {borderBottomColor: colors?.accent?.lightGrey},
                    ]}></View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    marginTop : '10%',
    marginBottom : '3%',
  },
  cancelSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchInputWrapper: {
    marginHorizontal: '7%',
    paddingHorizontal: '5%',
    borderRadius: 30,
    paddingVertical: 4,
    top : 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoriesSection: {
    marginTop: '20%',
  },
  boxWrapper: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    flexBasis: '80%',
  },
  sectionBox: {
    paddingHorizontal: '7%',
    marginTop: '6%',
  },
  textSection: {
    paddingHorizontal: '7%',
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  captionText: {
    fontSize: 14,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    color: 'red',
    marginTop: '6%',
  },
});
