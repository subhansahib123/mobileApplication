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
import FeatherIcon from 'react-native-vector-icons/Feather';

import {DATA} from '../../Frontend/booking/dummyData';
import Button from '../../../common/Button';

export default function OffersCards() {
  const {colors} = useSelector(state => state?.color);
  const {width, height} = Dimensions?.get('screen');
  const LENGHT = width * 0.9;
  const HEIGHT = height * 0.25;

  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item?.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <View
            style={[
              styles?.boxWrapper,
              {
                backgroundColor: colors?.accent?.white,
                width: LENGHT,
                height: HEIGHT,
              },
            ]}>
            <View style={styles?.titleSection}>
              <Text style={[styles?.title, {color: colors?.accent?.dark}]}>
                Chat with General Physician @99
              </Text>

              <Text style={[styles?.caption,{color : colors?.accent?.grey,}]}>
                Cold, fever, cough or flu? Chat {`\n`} with a doctor now.
              </Text>
            </View>
            <View style={styles?.bottomSection}>
                <View style={[styles?.dottedWrapper,{borderColor : colors?.primary?.blue}]}>
                    <Text style={{color : colors?.primary?.blue}}>ZXDSC</Text>
                </View>
            <View style={styles?.buttonSection}>
            <Button
            text="Avail"
            buttonColor={colors?.accent?.white}
            buttonTextColor={colors?.primary?.blue}
            buttonVerticalPadding={10}
            outlineColor={colors?.accent?.lightGrey}
            buttonWidth = {100}
            fontSize = {15}
            />
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
    paddingHorizontal: '5%',
    paddingVertical: '7%',
  },
  titleSection: {},
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },

  caption: {
    fontSize: 14,
    marginTop : '3%'
  },
  bottomSection : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    marginTop : '5%'
  },
  dottedWrapper : {
    borderWidth : 2,
    borderRadius : 7,
    borderStyle : 'dotted',
    flex : .4,
    paddingVertical : '3%',
    alignItems : 'center'
  },
  buttonSection : {},
});
