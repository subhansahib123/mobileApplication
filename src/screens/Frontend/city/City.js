import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import IonicIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default function City() {
  const {colors} = useSelector(state => state);
  const {width,height} = Dimensions.get('screen');

  const HEIGHT = height * 2

  const DATA = [
    {
      id: 0,
      headingText: 'state 1',
    },
    {
      id: 1,
      headingText: 'state 2',
    },
    {
      id: 2,
      headingText: 'state 3',
    },
    {
      id: 3,
      headingText: 'state 4',
    },
    {
      id: 4,
      headingText: 'state 5',
    },
    {
      id: 5,
      headingText: 'state 6',
    },
    {
      id: 6,
      headingText: 'state 7',
    },
    {
      id: 7,
      headingText: 'state 8',
    },
    {
      id: 8,
      headingText: 'state 9',
    },
    {
      id: 9,
      headingText: 'state 10',
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
            <EntypoIcon name="cross" size={40} color={colors?.accent?.white} />
            <Text style={[styles?.text, {color: colors?.accent?.white}]}>
              Select Your City
            </Text>
          </View>
        </View>
        <View
          style={[
            styles?.searchInputWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <FontAwesomeIcon
            name="search"
            size={20}
            color={colors?.accent?.dark}
          />
          <TextInput
            placeholder="Search here"
            placeholderTextColor={colors?.accent?.grey}
            style={{marginLeft: 10, color: colors?.accent?.dark}}
          />
        </View>
      </View>
      <View style={styles?.middleSection}>
        <View
          style={[
            styles?.iconCircle,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <IonicIcon
            name="md-locate-outline"
            size={30}
            color={colors?.gradients?.purple?.first}
          />
        </View>
        <Text style={[styles?.middleRightText, {color: colors?.accent?.dark}]}>
          Use Current Location
        </Text>
      </View>
      <View style={styles?.categoriesSection}>
        <View
          style={[
            styles?.boxWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <View style={styles?.cardContentSection}>
            <IonicIcon
              name="ios-flag-outline"
              size={25}
              color={colors?.gradients?.purple?.first}
            />
            <Text
              style={[styles?.cardHeaderText, {color: colors?.accent?.dark}]}>
              Country
            </Text>
            {/* <View style={[styles?.horizontalLine,{borderBottomColor : colors?.accent?.lightGrey}]}></View> */}
          </View>
          <View style={{backgroundColor : colors?.accent?.white,height : HEIGHT}}>
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
                          {color: colors?.accent?.grey},
                        ]}>
                        {item?.headingText}
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
    marginTop: '10%',
    marginBottom: '5%',
  },
  cancelSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  searchInputWrapper: {
    marginHorizontal: '7%',
    paddingHorizontal: '5%',
    borderRadius: 30,
    paddingVertical: 4,
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingHorizontal: '7%',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleRightText: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '500',
  },
  categoriesSection: {
    flex : 1
  },
  boxWrapper: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  cardContentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    paddingVertical: '5%',
  },
  cardHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sectionBox: {
    paddingHorizontal: '7%',

  },
  textSection: {
    paddingHorizontal: '7%',
  },
  headingText: {
    fontSize: 17,
    // fontWeight: 'bold',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginVertical: '6%',
  },
});
