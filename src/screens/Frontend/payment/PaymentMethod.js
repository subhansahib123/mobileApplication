import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

/// Icon
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {RadioButton} from 'react-native-paper';
import SwipableCards from './SwipableCards';
import Button from '../../../common/Button';

/// Images
import progressBar from '../../../assets/images/Step6.png'


export default function PaymentMethod({navigation}) {
  const [checked, setChecked] = useState('');
  const {colors} = useSelector(state => state);

  const {width, height} = Dimensions.get('screen');
  const LENGTH = width * 0.8;
  const HEIGHT = height * 0.22;

  const DATA = [
    {
      id: '0',
      currentBalance: '$5,642',
      bgColor: colors?.gradients?.purple?.first,
    },
    {
      id: '1',
      currentBalance: '$9,662',
      bgColor: colors?.gradients?.purple?.second,
    },
  ];

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={{flexBasis: '20%', marginTop: '-20%', marginBottom: '7%'}}>
        <Image
          source={progressBar}
          resizeMode="contain"
          style={{width: '100%', height: 300, zIndex: 2}}
        />
      </View>
      <View style={{marginBottom: '5%'}}>
        <SwipableCards />
      </View>
      <View
        style={[styles.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
          Visa **********250
        </Text>
        <Text
          style={{
            color: colors?.secondary?.red,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Change
        </Text>
      </View>
      <View
        style={[
          styles?.boxWrapper,
          {backgroundColor: colors?.accent?.white, alignItems: 'center'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: -6,
          }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={colors?.gradients?.lightBlue?.second}
          />
          <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
            Credit / Debit / ATM Card
          </Text>
        </View>
        <FontAwesomeIcon
          name="angle-right"
          size={20}
          color={colors?.accent?.dark}
        />
      </View>
      <View
        style={[
          styles?.boxWrapper,
          {backgroundColor: colors?.accent?.white, alignItems: 'center'},
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: -8,
          }}>
          <View
            style={[
              styles?.iconBox,
              {backgroundColor: colors?.gradients?.lightBlue?.second},
            ]}>
            <FontAwesomeIcon
              name="wallet"
              size={15}
              color={colors?.accent?.white}
            />
          </View>
          <Text
            style={[
              styles?.leftText,
              {color: colors?.accent?.dark, marginLeft: 10},
            ]}>
            Add a new card
          </Text>
        </View>
        <FontAwesomeIcon
          name="angle-right"
          size={20}
          color={colors?.accent?.dark}
        />
      </View>
      <View style={styles?.buttonSection}>
        <Button
          text="Continue"
          buttonColor={colors?.primary?.blue}
          buttonTextColor={colors?.accent?.white}
          buttonVerticalPadding={15}
          outlineColor={colors?.accent?.lightGrey}
          // buttonWidth={90}
          handlePress={() => navigation.navigate('Booking Success')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentCard: {
    // marginHorizontal: '5%',
    marginTop: '30%',
    borderRadius: 15,
    marginBottom: '5%',
    marginLeft: 20,
  },
  upperlineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
  },
  balanceWrapper: {
    flexDirection: 'column',
    marginTop: '10%',
    marginBottom: '20%',
  },
  balance: {
    fontSize: 30,
    fontWeight: '500',
  },
  upperRightText: {
    marginTop: '4%',
    fontSize: 22,
    fontWeight: 'bold',
  },
  lowerLineWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '8%',
    marginBottom: '7%',
  },
  boxWrapper: {
    marginTop: '4%',
    marginHorizontal: '5%',
    borderRadius: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  leftText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    paddingHorizontal: '5%',
    marginTop: '15%',
  },
});
