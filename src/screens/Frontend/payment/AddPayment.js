import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Button from '../../../common/Button';

/// Images
import progressBar from '../../../assets/images/Step5.png'


export default function AddPayment({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
        <View style={{flexBasis : '20%',marginTop : '-20%'}}>
          <Image source={progressBar} resizeMode='contain' style={{width :'100%',height : 300,zIndex : 2}}/>
        </View>
      <View
        style={[
          styles?.paymentCard,
          {backgroundColor: colors?.primary?.violet},
        ]}>
        <View style={styles?.upperlineWrapper}>
          <View style={styles?.balanceWrapper}>
            <Text style={{color: colors?.accent?.lightGrey}}>
              Current Balance
            </Text>
            <Text style={[styles?.balance, {color: colors?.accent?.white}]}>
              $5,642
            </Text>
          </View>

          <Text
            style={[styles?.upperRightText, {color: colors?.accent?.white}]}>
            VISA
          </Text>
        </View>
        <View style={styles?.lowerLineWrapper}>
          <Text style={{color: colors?.accent?.white, fontSize: 15}}>
            0000 1234 5678 XXXX
          </Text>
          <Text style={{color: colors?.accent?.white, fontSize: 15}}>
            10/21
          </Text>
        </View>
      </View>
      <View style={styles?.paymentFields}>
        <TextInput
          placeholder="Account Holder Name"
          placeholderTextColor={colors?.accent?.grey}
          style={[styles?.inputField, {backgroundColor: colors?.accent?.white}]}
          />
        <TextInput
          placeholder="Card Number"
          placeholderTextColor={colors?.accent?.grey}
          keyboardType="number-pad"
          style={[styles?.inputField, {backgroundColor: colors?.accent?.white}]}
          />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextInput
            placeholder="Exp. Date"
          placeholderTextColor={colors?.accent?.grey}
          style={[
            styles?.inputField,
            {backgroundColor: colors?.accent?.white, width: '45%'},
            ]}
            />
          <TextInput
            placeholder="CVV code"
            placeholderTextColor={colors?.accent?.grey}
            style={[
              styles?.inputField,
              {backgroundColor: colors?.accent?.white, width: '45%'},
            ]}
          />
        </View>
      </View>
      <View style={styles?.buttonSection}>
          <Button
            text="Continue"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={15}
            outlineColor={colors?.accent?.lightGrey}
            // buttonWidth={90}
            handlePress = {()=>navigation.navigate('Add Payment Method')}
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
    marginHorizontal: '5%',
    marginTop: '6%',
    borderRadius: 15,
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
  paymentFields: {
    marginHorizontal: '5%',
    marginTop: '7%',
  },
  inputField: {
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: '4%',
  },
  buttonSection : {
    paddingHorizontal : '5%',
    marginTop : '10%'
  },
});
