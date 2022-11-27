import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';

/// Libraries
import SwitchSelector from 'react-native-switch-selector';
import PhoneInput from 'react-native-phone-number-input';

/// otp verification
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function AuthPage(props) {
  const {titleText, subtitleText, buttonText, bottomText} = props;
  const {colors} = useSelector(state => state);

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  /// OTP Verification
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

 const navigation =  useNavigation()

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      if (confirmation) {
        setConfirm(confirmation);
        navigation.navigate({
          name : 'Phone Verification',
          params : {confirm : confirm,phoneNumber : phoneNumber},
          merge : true
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View style={styles.cardWrapper}>
        <View style={{paddingTop: '10%'}}>
          <Text style={styles.titleStyle}>{titleText}</Text>
          <Text style={styles.subtitleStyle}>{subtitleText}</Text>
        </View>

        <View style={styles?.switchButton}>
          <SwitchSelector
            initial={0}
            onPress={value => console.log(value)}
            textColor={colors?.accent?.dark} //'#7a44cf'
            selectedColor={colors?.accent?.white}
            buttonColor={colors?.gradients?.lightBlue?.second}
            borderColor={colors?.gradients?.lightBlue?.first}
            hasPadding
            options={[
              {label: 'patient', value: 'patient'},
              {label: 'doctor', value: 'doctor'},
            ]}
          />
        </View>

        <View style={styles.inputWrapper}>
          {/* <View
            style={[
              styles.inputBox,
              {
                backgroundColor: colors.accent.shadowColor,
              },
            ]}>
            <TextInput
              placeholder="Enter Your Phone Number"
              keyboardType="numeric"
              style={styles.input}
              placeholderTextColor="grey"
              // onChangeText={}
            />
          </View> */}
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
            withDarkTheme
            autoFocus
            containerStyle={{
              borderRadius: 30,
              backgroundColor: colors?.accent?.shadowColor,
              paddingVertical: -10,
            }}
            textContainerStyle={{
              borderRadius: 30,
              backgroundColor: colors?.accent?.shadowColor,
              paddingVertical: -10,
              paddingHorizontal: -5,
            }}
          />

          <View
            style={{
              marginVertical: '10%',
            }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Button
                mode="contained"
                buttonColor={colors.gradients.lightBlue.second}
                textColor={colors.accent.white}
                onPress={() => signInWithPhoneNumber(formattedValue)}
                contentStyle={{
                  height: 45,
                }}>
                {buttonText}
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={[styles.bottomText, {color: colors?.accent?.dark}]}>
        {bottomText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginVertical: '4%',
  },
  cardWrapper: {
    elevation: 4,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  titleStyle: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitleStyle: {
    color: 'grey',
    fontSize: 17,
    textAlign: 'center',
  },
  buttonsWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '7%',
  },
  inputWrapper: {
    paddingTop: '15%',
    paddingHorizontal: '5%',
  },
  inputBox: {
    borderRadius: 25,
  },
  input: {
    padding: 12,
    color: 'black',
  },
  bottomText: {
    // color: 'black',
    textAlign: 'center',
    paddingTop: '7%',
    fontSize: 16,
  },
  switchButton: {
    marginHorizontal: '5%',
    marginTop: '5%',
  },
});
