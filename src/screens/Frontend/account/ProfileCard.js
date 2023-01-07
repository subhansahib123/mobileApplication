import {Image, StyleSheet, Text, View} from 'react-native';
import React,{useEffect,useState} from 'react';
import {useSelector} from 'react-redux';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ProfilePic from '../../../assets/images/profile.jpeg';
import Button from '../../../common/Button';

/// Images
import userIcon from '../../../assets/images/userProfile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileCard({navigator}) {
  const {colors} = useSelector(state => state?.color);
  const {isNavigated} = useSelector(state => state?.login);

  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('');
  // console.log(updatedName);

  useEffect(()=>{
    getUserInfo()
  },[isNavigated])

  const getUserInfo = async() => {
    const response = await AsyncStorage.getItem('USER')
    const data = JSON.parse(response);

    const userName = data.user.name
    const phone_Number = data.user.phone_number;

    setName(userName)
    setPhoneNumber(phone_Number);
  }

  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.primary?.blue}]}>
      <View style={styles?.iconSection}>
        <AntDesignIcon name="user" size={30} color={colors?.accent?.white} />
        <AntDesignIcon name="setting" size={30} color={colors?.accent?.white} />
      </View>
      <View style={styles?.infoSection}>
        <View style={styles?.imageCircle}>
          <Image
            source={ProfilePic}
            style={{width: '100%', height: '100%', borderRadius: 100 / 2}}
          />
        </View>
        <View style={styles?.textSection}>
          <Text style={[styles?.drName, {color: colors?.accent?.white}]}>
            {name}
          </Text>
          <Text style={[styles?.number, {color: colors?.accent?.white}]}>
            {phoneNumber}
          </Text>
        </View>
        <View style={styles?.percentageSection}>
            <Text style={[styles?.percentage,{color : colors?.accent?.white}]}>22%</Text>
          <ProgressBar
            styleAttr="Horizontal"
            color={colors?.accent?.white}
            indeterminate={false}
            progress={.60}
            style={{backgroundColor : 'transparent',borderRadius : 30}}
          />
        </View>
        <View style={styles?.buttonSection}>
        <Button
            text="Complete Your Profile"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={13}
            outlineColor={colors?.accent?.lightGrey}
            fontSize={16}
            buttonWidth = {220}
            handlePress={()=>navigator.navigate('UpdateName')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 25,
    marginVertical: '5%',
    marginHorizontal: '6%',
  },
  iconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  infoSection: {
    alignItems: 'center',
    position : 'relative',
    top : '-5%'
  },
  imageCircle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  textSection: {
    marginTop: '3%',
  },
  drName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  number: {
    fontSize: 16,
    textAlign : 'center'
  },
  percentageSection : {
    width : '80%',
    marginTop : '7%',
    marginBottom : '5%'
  },
  percentage : {
    textAlign : 'center',
    fontSize : 17,
    fontWeight : 'bold'
  },
  buttonSection : {
    marginBottom : '5%'
  },
});
