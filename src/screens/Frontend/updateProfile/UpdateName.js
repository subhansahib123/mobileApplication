import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../../common/Button';
import {setIsNavigated} from '../../../store/features/login/loginSice';

export default function UpdateName({navigation}) {
  const {colors} = useSelector(state => state?.color);
  const {userInfo, userToken} = useSelector(state => state?.login);

  const [name, setName] = useState('');
  const [updatedName,setUpdatedName] = useState('')

  const dispatch = useDispatch();

  useEffect(()=>{
    getUserInfo()
  },[])

  const getUserInfo = async () => {
    const response = await AsyncStorage.getItem('USER');
    const data = JSON.parse(response);

    const name = data.user.name;

    setName(name);
  }

  const updateName = async () => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
      name: updatedName,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      await fetch(
        'http://192.168.0.111:8000/api/patient/displayName/updated',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleResponse(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleResponse = async response => {
    await AsyncStorage.mergeItem(
      'USER',
      JSON.stringify({user: {name: response?.data?.user?.name}}),
    );

    dispatch(setIsNavigated(5))
    navigation?.navigate({
        name : 'Bottom Tabs',
    });
    setUpdatedName('')
  };

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.inputBox}>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              value={name}
              style={{color: colors?.accent?.dark}}
            />
          </View>
          <View
            style={[
              styles?.inputWrapper,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <TextInput
              placeholder="Name to Update"
              placeholderTextColor={colors?.accent?.lightGrey}
              style={{color: colors?.accent?.dark}}
              onChangeText={val => setUpdatedName(val)}
            />
          </View>
        </View>

        <View style={styles?.buttonWrapper}>
          <Button
            text="Update"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={13}
            outlineColor={colors?.primary?.blue}
            handlePress={updateName}
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
  cardWrapper: {
    marginTop: '10%',
    marginHorizontal: '5%',
    borderRadius: 15,
  },
  inputBox: {
    marginTop: '10%',
    marginBottom: '5%',
  },
  inputWrapper: {
    marginHorizontal: '5%',
    marginBottom: '5%',
    borderRadius: 30,
    paddingHorizontal: '5%',
  },
  buttonWrapper: {
    marginHorizontal: '5%',
    marginBottom: '10%',
  },
});
