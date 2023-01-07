import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useRef, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../../common/Button';

import {setIsNavigated} from '../../../store/features/login/loginSice';

const initialState = {
  start: '',
  end: '',
  price: '',
  interval: '',
  number_of_people: '',
  comment: '',
};

export default function CreateSchedule({navigation, route}) {

  const [state, setState] = useState(initialState);

  const {colors} = useSelector(state => state?.color);
  const {member_to_update, userToken} = useSelector(state => state?.login);
  const dispatch = useDispatch();

  console.log(state);

  // console.log(member_to_update);


  /// For Condition that to updata a member or create a member
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  let isEmpty = isObjectEmpty(member_to_update);

  const handleChange = (name, val) => {
    setState(s => ({...s, [name]: val}));
  };

  /// Creating A Schedule
  const createSchedule = async () => {
    if (
      state?.start == '' ||
      state?.end == '' ||
      state?.price == '' ||
      state?.interval == '' ||
      state?.number_of_people == '' ||
      state?.comment == ''
    ) {
      return alert('All Fields Are Required');
    } else {

      let myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userToken}`);
      myHeaders.append('Content-Type', 'application/json');

      let raw = JSON.stringify({
        start: state.start,
        end: state.end,
        price: state.price,
        interval: state.interval,
        number_of_people: state.number_of_people,
        comment: state.comment,
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      try {
        
        await  fetch(
            'http://192.168.0.111:8000/api/doctor/store/schedule',
            requestOptions,
          )
            .then(response => response.json())
            .then(result => handleResponse(result))
            .catch(error => console.log('error', error))
      } catch (error) {
        console.error(error);        
      }
    }
  };
  const handleResponse = response => {
    dispatch(setIsNavigated(15));
    navigation?.navigate({
      name: 'ScheduleList',
    });
  };

  /// Updating A Member
  const updateSchedule = async () => {
    // let myHeaders = new Headers();
    // myHeaders.append('Authorization', `Bearer ${userToken}`);
    // myHeaders.append('Content-Type', 'application/json');

    // let raw = JSON.stringify({
    //   memberName: state?.name == '' ? member_to_update?.name : state?.name,
    //   email: state?.email == '' ? member_to_update?.email : state?.email,
    //   phoneNumber:
    //     state?.phoneNumber == ''
    //       ? member_to_update?.phone_number
    //       : state?.phoneNumber,
    //   relation:
    //     state?.relation == '' ? member_to_update?.relation : state?.relation,
    // });

    // let requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow',
    // };

    // try {
    //   await fetch(
    //     `http://192.168.0.111:8000/api/patient/member/updated/${member_to_update?.id}`,
    //     requestOptions,
    //   )
    //     .then(response => response.json())
    //     .then(result => handleUpdateResponse(result))
    //     .catch(error => console.log('error', error));
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleUpdateResponse = response => {
    dispatch(setIsNavigated(2));
    navigation?.navigate({
      name: 'MembersList',
    });
  };

  // console.log(state);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
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
              placeholder="Start Date"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('start', val)}
              keyboardType='default'
              defaultValue={member_to_update?.start}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="End Date"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('end', val)}
              keyboardType='default'
              defaultValue={member_to_update?.end}
            />
          </View>

          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Enter Price"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('price', val)}
              keyboardType='number-pad'
              defaultValue={member_to_update?.price}
              // editable={true}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Enter Interval"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('interval', val)}
              keyboardType='number-pad'
              defaultValue={member_to_update?.interval}
              // editable={true}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Enter People Per Slot"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={[styles?.input, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('number_of_people', val)}
              keyboardType='number-pad'
              defaultValue={member_to_update?.number_of_people}
              // editable={true}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Enter Comments about schedule"
              placeholderTextColor={colors?.accent?.lightGrey}
              multiline={true}
              numberOfLines={5}
              style={[styles?.textArea, {color: colors?.accent?.dark}]}
              onChangeText={val => handleChange('comment', val)}
              keyboardType='default'
              defaultValue={member_to_update?.comment}
              // editable={true}
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
            handlePress={!isEmpty ? updateSchedule : createSchedule}
          />
        </View>
      </View>
    </ScrollView>
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
  textArea: {
    borderRadius: 15,
    textAlignVertical: 'top',
    paddingHorizontal: '5%',
  },
});
