import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ProfileInfoBox from './ProfileInfoBox';
import CompleteDetailsCard from './CompleteDetailsCard';

export default function ProfilePage({navigation,route}) {
  const {colors} = useSelector(state => state?.color);
  const {doctor_id} = route?.params

useEffect(()=>{
fetchDoctorDetails()
},[])

const fetchDoctorDetails = async () => {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  try {
    
    await fetch(`http://192.168.0.111:8000/api/doctor-details/${doctor_id}`, requestOptions)
       .then(response => response.json())
       .then(result => handleResponse(result))
       .catch(error => console.log('error', error));
  } catch (error) {
      console.error(error);    
  }
};

const handleResponse = response => {
  console.log(response);
}

  return (
    <ScrollView
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shaowColor},
      ]}>
      <View
        style={[
          styles?.backDropSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
        <AntDesignIcon
          name="arrowleft"
          size={30}
          color={colors?.accent?.white}
          style={{paddingTop: '8%'}}
        />
      </View>
      <View style={{top: '-9.3%'}}>
        <View>
          <ProfileInfoBox />
        </View>
        <View style={{paddingVertical : '5%',marginBottom : '12%'}}>
            <CompleteDetailsCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    paddingHorizontal: '5%',
    width: '100%',
    height: '16%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
