import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import PhoneInput from 'react-native-phone-number-input';
import Button from '../../../common/Button';

/// otp verification
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

///Image
import verificaionCard from '../../../assets/images/verification.png';

/// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

/// Functions to be dispatched
import {
  setLoggedIn,
  setUserToken,
  setUserInfo,
  setLoading,
  setIsDoctor,
  setIsPatient,
} from '../../../store/features/login/loginSice';

export default function Login({}) {
  const {colors} = useSelector(state => state?.color);
  const {isAuthenticated} = useSelector(state => state?.login);

  const [userExist, setUserExist] = useState(false);
  const [response, setResponse] = useState({});

  const [checked, setChecked] = useState('patient');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  //   /// OTP Verification
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, [userExist]);

  async function signInWithPhoneNumber(phoneNumber) {
    try {
      if (checked == 'patient') {
        fetchPatientLoginData(phoneNumber);
      } else if (checked == 'doctor') {
        fetchDoctorLoginData(phoneNumber);
      } else {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const sendOtp = async param => {
    if (param?.message?.msg_status == 'No User Exist') {
      alert('Not Regiestered');
    } else {
      const confirmation = await auth().signInWithPhoneNumber(formattedValue);
      if (confirmation) {
        setConfirm(confirmation);

        navigation.navigate({
          name: 'OTP',
          params: {confirm: confirm, phoneNumber: formattedValue},
          merge: true,
        });
      }
    }
  };

  ///Patient Login Api call
  const fetchPatientLoginData = async phoneNumber => {
    let raw = '';

    let requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
    };

    try {
      await fetch(
        `http://192.168.0.111:8000/api/patient/logined?phoneNumber=${phoneNumber}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleUser(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUser = result => {
    if (result.message.msg_status == 'Successfully Login') {
      storePatientInfo(result?.data);
      setResponse(result?.data);
      dispatch(setIsPatient(true));
    }
    sendOtp(result);
  };

  /// Fetching Doctor Login Data
  const fetchDoctorLoginData = async phoneNumber => {
    let requestOptions = {
      method: 'POST',
      redirect: 'follow',
    };

    try {
      await fetch(
        `http://192.168.0.111:8000/api/doctor/logined?phoneNumber=${phoneNumber}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleResponse2(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleResponse2 = response => {
    if (response.message.msg_status == 'Successfully Login') {
      storeDoctorInfo(response?.data);
      setResponse(response?.data);
      dispatch(setIsDoctor(true));
      sendOtp(response);
    }
  };

  /// Storing Patient Info in async storage
  const storePatientInfo = async param => {
    try {
      const stringifiedData = JSON?.stringify(param);

      await AsyncStorage?.setItem('USER', stringifiedData);
      if (param) {
        setUserExist(true);
        dispatch(setLoggedIn(true));
      }
    } catch (error) {
      console?.log(error);
    }
  };

  ////Storing Doctor Info in async Storage
  const storeDoctorInfo = async param => {
    try {
      const stringifiedData = JSON?.stringify(param);

      await AsyncStorage?.setItem('USER', stringifiedData);
      if (param) {
        setUserExist(true); ///this has to be changed
        dispatch(setLoggedIn(true));
      }
    } catch (error) {
      console?.log(error);
    }
  };

  /// Getting user from async storage
  const getUser = async () => {
    let response = await AsyncStorage?.getItem('USER');
    let data = JSON?.parse(response);
    // console.log(data);
    if (data != null) {
      navigation?.navigate('BottomTabs');
      dispatch(setLoggedIn(true));
    }
    dispatch(setLoggedIn(true));
    dispatch(setUserToken(data?.token));
    dispatch(setUserInfo(data?.user));


if (data?.user?.doctor != undefined) {
  dispatch(setIsDoctor(true))
}else{
  dispatch(setIsPatient(true))
}

  };

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
      <View>
        <View style={styles?.selectorBox}>
          <Pressable
            style={[
              styles?.selector1,
              {
                backgroundColor:
                  checked == 'patient'
                    ? colors?.primary?.blue
                    : colors?.accent?.shadowColor,
              },
            ]}
            onPress={() => setChecked('patient')}>
            <Text
              style={{
                color:
                  checked == 'patient'
                    ? colors?.accent?.white
                    : colors?.accent?.dark,
              }}>
              Patient
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setChecked('doctor')}
            style={[
              styles?.selector2,
              {
                backgroundColor:
                  checked == 'doctor'
                    ? colors?.primary?.blue
                    : colors?.accent?.shadowColor,
              },
            ]}>
            <Text
              style={{
                color:
                  checked == 'doctor'
                    ? colors?.accent?.white
                    : colors?.accent?.dark,
              }}>
              Doctor
            </Text>
          </Pressable>
        </View>
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
            layout="first"
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
            handlePress={() => signInWithPhoneNumber(formattedValue)}
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
    // width : '70%',
    // height : '70%',
    flex: 0.7,
  },
  topText: {
    textAlign: 'center',
    fontSize: 17,
    marginBottom: -10,
  },
  selectorBox: {
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: '5%',
    marginTop: '-10%',
    marginBottom: '5%',
  },
  selector1: {
    paddingVertical: '4%',
    borderRadius: 30,
    flexBasis: '50%',
    alignItems: 'center',
  },
  selector2: {
    paddingVertical: '4%',
    borderRadius: 30,
    flexBasis: '50%',
    alignItems: 'center',
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
