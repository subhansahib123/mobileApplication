import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ProfilePic from '../../../assets/images/profile.jpeg';
import {DATA} from './dummyData'

export default function MessageBoxes() {
  const {colors} = useSelector(state => state?.color);
  const {width, height} = Dimensions?.get('screen');
  const LENGHT = width * 0.9;
  const HEIGHT = height * 0.1;

  const renderRightView =()=> {
    return(
        <View style={[styles?.crossCircle,{backgroundColor : colors?.secondary?.red}]}>

        </View>
    );
  };

  
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item?.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View
          renderRightActions={(progress,dragX)=>renderRightView()}
        
          >
            <View
              style={[
                styles?.boxWrapper,
                {
                  backgroundColor: colors?.accent?.white,
                  width: LENGHT,
                  height: HEIGHT,
                  marginTop : item?.firstChild ? '13%' : 0
                },
              ]}>
              <View style={styles?.topSection}>
                <View
                  style={[
                    styles?.badgeCircle,
                    {backgroundColor: colors?.accent?.shadowColor},
                  ]}>
                  <Image
                    source={ProfilePic}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 75 / 2,
                    }}
                  />
                  <View
                    style={[
                      styles?.onlineBadge,
                      {
                        backgroundColor: colors?.secondary?.green,
                        borderColor: colors?.secondary?.green,
                      },
                    ]}></View>
                </View>
                <View style={styles?.centeredText}>
                  <View style={styles?.titleSection}>
                    <Text
                      style={[styles?.drName, {color: colors?.accent?.dark}]}>
                      {item?.headerText}
                    </Text>
                    <Text
                      style={[
                        styles?.rightText,
                        {color: colors?.accent?.grey},
                      ]}>
                      {item?.time}
                    </Text>
                  </View>
                  <Text style={[styles?.drInfo, {color: colors?.accent?.grey}]}>
                    {item?.captionText}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  boxWrapper: {
    borderRadius: 15,
    marginBottom: '6%',
  },
  topSection: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  badgeCircle: {
    width: 51,
    height: 51,
    borderRadius: 51 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  drName: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  drInfo: {
    fontSize: 15,
  },
  onlineBadge: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    position: 'absolute',
    bottom: 2,
    right: 2,
    borderWidth: 1,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centeredText: {
    marginLeft: 15,
    flexBasis: '70%',
  },
  rightText: {
    marginRight: '-10%',
  },
  crossCircle : {
    width : 100,
    height : 100,
    borderRadius : 100 / 2,
    justifyContent : 'center',
    alignItems : 'center',
  },
});
