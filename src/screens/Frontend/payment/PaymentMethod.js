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
      <View style={styles?.cardWrapper}>
        <SwipableCards data= {DATA}/>
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
      <View style={styles?.buttonSection}>
        <Button
          text="Continue"
          buttonColor={colors?.primary?.blue}
          buttonTextColor={colors?.accent?.white}
          buttonVerticalPadding={15}
          outlineColor={colors?.accent?.lightGrey}
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
  cardWrapper : {
    marginLeft : 'auto',
    marginRight : 'auto',
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
  buttonSection: {
    paddingHorizontal: '5%',
    marginTop: '10%',
  },
});
