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
  const {colors} = useSelector(state => state?.color);

  const DATA = [
    {
      id: '0',
      currentBalance: '$5,642',
      bgColor: colors?.gradients?.purple?.first,
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
        <View style={styles?.crossIconSection}>
          <Image source={crossIcon} resizeMode='contain' style={{width : 18,height : 18,marginLeft : 10,marginRight : 10}}/>
          <Text style={[styles?.header, {color: colors?.accent?.white}]}>
            My Payments
          </Text>
        </View>
      </View>
      <View style={styles?.cardsSection}>
        <View style={styles?.cardWrapper}>
          <SwipableCards data={DATA}/>
        </View>
      <View
        style={[styles.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
          Visa **********250
        </Text>
        <Text
          style={{
            color: colors?.secondary?.red,
            fontSize: 14,
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
            STRIPE
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
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardWrapper : {
    marginBottom : '3%',
    marginLeft : 'auto',
    marginRight : 'auto',

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
    fontSize: 16,
    fontWeight: 'bold',
  },

});
