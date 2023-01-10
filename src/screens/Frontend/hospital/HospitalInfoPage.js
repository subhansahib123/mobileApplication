import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import bgImage from '../../../assets/images/optic2.jpg';
import HospitalInfoCard from './HospitalInfoCard';

export default function HospitalInfoPage({navigation, route}) {
  const {colors} = useSelector(state => state?.color);
  const {orgId} = route?.params;

  // console.log(orgId);

  const [hospitalInfo, setHospitalInfo] = useState({});
  const [departmentInfo, setDepartmentInfo] = useState();

  useEffect(() => {
    fetchHospitalList();
  }, []);

  /// Fetching Hospitals
  const fetchHospitalList = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      await fetch(
        `http://192.168.0.111:8000/api/hospital/${orgId}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleResponse(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleResponse = response => {

    // console.log(response);
    setHospitalInfo(response?.data);


    fetchDepartmentList(response?.data?.departmentSpecializations[0]?.id);
    // fetchDepartmentList(response?.data?.departmentSpecializations[1]?.id);
    
  };

  /// Fetching Departments
  const fetchDepartmentList = async department_id => {


    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      await fetch(
        `http://192.168.0.111:8000/api/allDepartments/${department_id}`,
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleDepartmentResponse(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDepartmentResponse = response => {
    // console.log(response);
    setDepartmentInfo(response?.data);
  };

  return (
    <ScrollView
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}
      showsVerticalScrollIndicator={false}>
      <View style={styles?.bgImageSection}>
        <ImageBackground source={bgImage} style={{}}>
          <View style={styles?.topSection}>
            <TouchableOpacity
              style={styles?.leftTextSection}
              onPress={() => navigation?.goBack()}
              activeOpacity={0.8}>
              <AntDesignIcon
                name="arrowleft"
                size={30}
                color={colors?.accent?.white}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
            <Text style={{color: colors?.accent?.white, fontSize: 14}}>
              {hospitalInfo?.hospital?.country}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{top: '-10%', marginBottom: '-17%'}}>
        <HospitalInfoCard
          navigator={navigation}
          hospitalInfo={hospitalInfo}
          departmentInfo={departmentInfo}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageSection: {},
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginTop: '4%',
    marginBottom: '50%',
  },
  leftTextSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
  },
});
