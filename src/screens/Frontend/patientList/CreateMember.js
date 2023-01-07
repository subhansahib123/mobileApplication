import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../../common/Button';

import {setIsNavigated} from '../../../store/features/login/loginSice';

const initialState = {
  name: '',
  email: '',
  phoneNumber: '',
  relation: '',
};

export default function CreateMember({navigation, route}) {
  /// PhoneNumber Input States
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  /// Remaining Input state
  const [state, setState] = useState(initialState);

  const {colors} = useSelector(state => state?.color);
  const {member_to_update, userToken} = useSelector(state => state?.login);
  const dispatch = useDispatch();

  

  /// For Condition that to updata a member or create a member
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  let isEmpty = isObjectEmpty(member_to_update);

  const handleChange = (name, val) => {
    setState(s => ({...s, [name]: val}));
  };

  /// Creating A member
  const createMember = async () => {
    if (
      state?.email == '' ||
      state?.name == '' ||
      state?.phoneNumber == '' ||
      state?.relation == ''
    ) {
      return alert('All Fields Are Required');
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userToken}`);
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        memberName: state?.name,
        email: state?.email,
        phoneNumber: state?.phoneNumber,
        relation: state?.relation,
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      try {
        await fetch(
          'http://192.168.0.111:8000/api/patient/member/created',
          requestOptions,
        )
          .then(response => response.json())
          .then(result => handleResponse(result))
          .catch(error => console.log('error', error));
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleResponse = response => {

    dispatch(setIsNavigated(1))
    navigation?.navigate({
      name: 'MembersList',
    });
  };

  /// Updating A Member
  const updateMember = async () => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      memberName: state?.name == '' ? member_to_update?.name : state?.name,
      email: state?.email == '' ? member_to_update?.email : state?.email,
      phoneNumber:
        state?.phoneNumber == ''
          ? member_to_update?.phone_number
          : state?.phoneNumber,
      relation:
        state?.relation == '' ? member_to_update?.relation : state?.relation,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      await fetch(
        `http://192.168.0.111:8000/api/patient/member/updated/${member_to_update?.id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleUpdateResponse(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateResponse = response => {
    dispatch(setIsNavigated(2));
    navigation?.navigate({
      name: 'MembersList',
    });
  };

  // console.log(state);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={[styles?.card, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.inputBoxWrapper}>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Name"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('name', val)}
              keyboardType="default"
              defaultValue={member_to_update?.name}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('email', val)}
              keyboardType="email-address"
              defaultValue={member_to_update?.email}
            />
          </View>
          <View style={[styles?.inputWrapper, {paddingHorizontal: 0}]}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={member_to_update?.phone_number}
              defaultCode="PK"
              onChangeText={text => {
                setValue(text);
              }}
              onChangeFormattedText={text => {
                setFormattedValue(text);
                handleChange('phoneNumber', text);
              }}
              // withDarkTheme
              layout="first"
              flagButtonStyle={[
                styles?.leftBox,
                {
                  backgroundColor: colors?.accent?.shadowColor,
                },
              ]}
              textContainerStyle={[
                styles?.rightBox,
                {
                  backgroundColor: colors?.accent?.shadowColor,
                },
              ]}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Relation"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('relation', val)}
              keyboardType="default"
              defaultValue={member_to_update?.relation}
              editable={true}
            />
          </View>
        </View>
        <View style={styles?.btnwrapper}>
          <Button
            text={!isEmpty ? 'Update' : 'Create'}
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={13}
            outlineColor={colors?.primary?.blue}
            handlePress={!isEmpty ? updateMember : createMember}
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
  card: {
    marginHorizontal: '5%',
    marginTop: '10%',
    borderRadius: 15,
  },
  inputBoxWrapper: {
    marginHorizontal: '5%',
    marginTop: '10%',
  },
  inputWrapper: {
    borderRadius: 20,
    marginBottom: '5%',
    paddingHorizontal: '3%',
  },
  input: {
    borderRadius: 20,
  },
  leftBox: {
    marginRight: 10,
    borderRadius: 20,
  },
  rightBox: {
    borderRadius: 20,
    paddingVertical: -8,
  },
  btnwrapper: {
    marginHorizontal: '5%',
    marginTop: '5%',
    marginBottom: '10%',
  },
});
