import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import OffersCards from './OffersCards';
/// Images
import crossIcon from '../../../assets/images/cross.png';

export default function Offers() {
  const {colors} = useSelector(state => state);

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
        <View style={styles?.crossIconSection}>
          <Image
            source={crossIcon}
            resizeMode="contain"
            style={{width: 18, height: 18, marginLeft: 10, marginRight: 10}}
          />
          <Text style={[styles?.header, {color: colors?.accent?.white}]}>
            Offers
          </Text>
        </View>
      </View>

      <View style={styles?.messageBoxesSec}>
        <OffersCards />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    height: '20%',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  crossIconSection: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  messageBoxesSec: {
    paddingHorizontal: '5%',
    flex: 1,
    position: 'relative',
    top: '-5%',
  },
});
