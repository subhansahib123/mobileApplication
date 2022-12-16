import React, {useState, useRef} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';

import PhoneInput from 'react-native-phone-number-input';
import Button from '../../../common/Button';

/// otp verification
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

///Image
import verificaionCard from '../../../assets/images/verification.png';

export default function Login({}) {
  const {colors} = useSelector(state => state);

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  //   /// OTP Verification
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  // async function signInWithPhoneNumber(phoneNumber) {
  //   try {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     if (confirmation) {
  //       setConfirm(confirmation);
  //       navigation.navigate({
  //         name : 'OTP',
  //         params : {confirm : confirm,phoneNumber : phoneNumber},
  //         merge : true
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const fetchData = async () => {
    var myHeaders = new Headers();
    myHeaders.append("phonNumber", "+923035383338");
    
    var raw = "";
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://drtele.co/api/patient/logined?phoneNumber=+923035383338", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={styles?.topSection}>
        <View style={styles?.imagewrapper}>
          <Image
            source={verificaionCard}
            style={styles?.image}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles?.topText, {color: colors?.accent?.lightDark}]}>
          Enter your mobile number we will send you the OTP to verify later
        </Text>
      </View>
      <View
        style={[styles?.boxWrapper, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.inputWrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            // withDarkTheme
            layout="second"
            autoFocus
            flagButtonStyle={[
              styles?.leftBox,
              {borderColor: colors?.accent?.lightGrey},
            ]}
            textContainerStyle={[
              styles?.rightBox,
              {
                backgroundColor: colors?.accent?.white,
                borderColor: colors?.accent?.lightGrey,
              },
            ]}
          />
        </View>
        <View style={styles?.buttonWrapper}>
          <Button
            text="Submit"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={12}
            outlineColor="transparent"
            // handlePress = {()=>signInWithPhoneNumber(formattedValue)}
            handlePress={() => navigation.navigate('OTP')}
            // handlePress={fetchData}
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
  topSection: {
    marginTop: '25%',
    marginHorizontal: '8%',
    marginBottom: '15%',
    flexBasis: '20%',
  },
  imagewrapper: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    flex: .8,
  },
  topText: {
    textAlign: 'center',
    fontSize: 17,
  },
  boxWrapper: {
    marginHorizontal: '6%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderRadius: 15,
  },
  inputWrapper: {
    marginTop: '3%',
    marginBottom: '13%',
  },
  leftBox: {
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  rightBox: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: -10,
  },
  buttonWrapper: {
    marginBottom: '4%',
  },
});
