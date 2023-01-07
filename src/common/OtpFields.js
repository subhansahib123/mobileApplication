import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/// Otp input View
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useSelector} from 'react-redux';

export default function OtpFields() {
  const [otp, setOtp] = useState('');
  const {colors} = useSelector(state => state?.color);

  return (
    <OTPInputView
      style={{width: '80%', height: 70}}
      pinCount={6}
      code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
      onCodeChanged={val => setOtp(val)}
      keyboardType="number-pad"
      autoFocusOnLoad={true}
      editable
      keyboardAppearance="dark"
      codeInputFieldStyle={[
        styles.underlineStyleBase,
        {color: colors?.accent?.dark},
      ]}
      codeInputHighlightStyle={{
        borderColor: colors?.gradients?.lightBlue?.second,
      }}
      // onCodeFilled = {(code => {
      //     console.log(`Code is ${code}, you are good to go!`)
      // })}
      placeholderTextColor={colors?.accent?.dark}
    />
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});
