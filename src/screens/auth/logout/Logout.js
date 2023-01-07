import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import {setLoggedIn} from "../../../store/features/login/loginSice"

export default function Logout({navigation}) {

  const {userToken,isAuthenticated,isPatient,isDoctor} = useSelector(state => state?.login);


  const dispatch = useDispatch()

  useEffect(() => {
    if (isPatient == true) {
      logoutPatient()
    }else if (isDoctor == true){
      logoutDoctor()
    }else{
      return
    }
    
  }, []);
  
  
  const logoutPatient = async () => {

      let myHeaders = new Headers();
      myHeaders.append(
        'Authorization',
        `Bearer ${userToken}` ,
      );
  
      let raw = '';
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
  
     await fetch('http://192.168.0.111:8000/api/patient/logout', requestOptions)
        .then(response => response.json())
        .then(result => removeUser(result))
        .catch(error => console.log('error', error));
    
   
    };

    const logoutDoctor = async () => {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userToken}` );
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow'
      };
      try {
        await fetch("http://192.168.0.111:8000/api/patient/logout", requestOptions)
           .then(response => response.json())
           .then(result => removeUser(result))
           .catch(error => console.log('error', error));
        
      } catch (error) {
          console.error(error)        
      }
    }
    
    const removeUser = async response  => {
      
      if (response.message.msg_status == 'Logout Successfully') {
        await AsyncStorage?.removeItem('USER');
        dispatch(setLoggedIn(false))
        navigation.navigate({
          name : "LogIn"
        })
      }
      
      
    };
    

  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({});
