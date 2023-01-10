import React,{useState,useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import InfoCard from './InfoCard';

import {setIsNavigated} from "../../../store/features/login/loginSice"

export default function DepartmentPage({navigation,route}) {
  

  const {colors} = useSelector(state => state?.color);
  const {department_id} = route?.params;

  
  const [response,setResponse] = useState()

  const dispatch = useDispatch()
  /// Screen Dimensions
  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH1 = width * 0.3; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT1 = height * 0.04;

  const DATA = [
    {id: 0, text: 'Availabilty'},
    {id: 1, text: 'In Hospital'},
    {id: 2, text: 'Online Booking'},
    {id: 3, text: 'Consultation'},
  ];

  useEffect(()=>{
      fetchDepartmentDetails()
  },[]);

  const fetchDepartmentDetails = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    try {
      await  fetch(`http://192.168.0.111:8000/api/department/${department_id}`, requestOptions)
          .then(response => response.json())
          .then(result => handleResponse(result))
          .catch(error => console.log('error', error));
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleResponse = response => {
    setResponse(response)
    // console.log(response);
  }


  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[
          styles?.backDropSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
        <View style={styles?.leftSection}>
          <TouchableOpacity
          onPress={()=>{
            navigation?.goBack()
            dispatch(setIsNavigated(3))
            
          }}
          activeOpacity={.8}
          >

          <AntDesignIcon
            name="arrowleft"
            size={25}
            color={colors?.accent?.white}
            
            />
            </TouchableOpacity>
          <Text style={[styles?.headingText, {color: colors?.accent?.white}]}>
            {/* {response?.data?.departments?.name} */}
          </Text>
        </View>
        {/* <Text
          style={{
            color: colors?.accent?.white,
            fontSize: 15,
            marginRight: -55,
          }}>
          Country
        </Text>
        <FontAwesomeIcon
          name="chevron-down"
          size={10}
          color={colors?.accent?.white}
          style={{marginRight: 6}}
        /> */}
      </View>
      <View style={{backgroundColor: colors?.accent?.shadowColor,marginTop : '5%'}}>
        <InfoCard item={response} navigator={navigation}/>

    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '7%',
    paddingBottom: '15%',
    
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPillsWrapper: {
    top: -15,
    marginBottom: '-8.9%',
    zIndex: 2,
  },
  textPills: {
    borderRadius: 20,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize : 14,
    // fontWeight : 'bold'
  },
});
