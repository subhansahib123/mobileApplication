import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

/// Icon
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {RadioButton} from 'react-native-paper';
import SwipableCards from './SwipableCards';

/// Images
import crossIcon from '../../../assets/images/cross.png';



export default function MyPayments({navigation}) {
  const [checked, setChecked] = useState('');
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
          <Image source={crossIcon} resizeMode='contain' style={{width : 22,height : 22,marginLeft : 10,marginRight : 10}}/>
          <Text style={[styles?.header, {color: colors?.accent?.white}]}>
            My Payments
          </Text>
        </View>
      </View>
      <View style={styles?.cardsSection}>
        <View style={{marginBottom : '3%'}}>
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
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    height: '25%',
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
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardsSection: {
    position : 'relative',
    top : '-8%'
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
});
