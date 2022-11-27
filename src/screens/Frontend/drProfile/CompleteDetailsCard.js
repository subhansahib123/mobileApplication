import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import mapImage from '../../../assets/images/map.webp';
import Button from '../../../common/Button';
import { useNavigation } from '@react-navigation/native';

export default function CompleteDetailsCard() {
  const {colors} = useSelector(state => state);
  const navigation = useNavigation()
  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
      <View style={styles?.cardContentwrapper}>
        <View style={styles?.cardTopSection}>
          <Text style={[styles?.headingText, {color: colors?.accent?.grey}]}>
            In Clinic Fees :{' '}
            <Text style={{color: colors?.accent?.dark}}>$ 10</Text>
          </Text>
          <Button
            text="Book"
            buttonColor={colors?.accent?.white}
            buttonTextColor={colors?.primary?.blue}
            buttonVerticalPadding={4}
            outlineColor={colors?.accent?.lightGrey}
            buttonWidth={90}
            handlePress = {()=>navigation.navigate('Booking Review')}
          />
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey},
          ]}></View>
        <View style={styles?.timingSection}>
          <Text style={[styles?.leftText, {color: colors?.secondary?.red}]}>
            Closed Today
          </Text>
          <Text style={[styles?.bottomText, {color: colors?.accent?.dark}]}>
            9:30AM - 08:00PM
          </Text>
          <Text style={[styles?.rightText, {color: colors?.primary?.blue}]}>
            All Timing
          </Text>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey},
          ]}></View>
        <View style={styles?.mapSection}>
          <View style={styles?.addressIconSection}>
            <Ionicons
              name="md-location-outline"
              size={20}
              color={colors?.gradients?.skyBlue?.second}
            />
            <Text style={[styles?.addressText, {color: colors?.accent?.grey}]}>
              92/6, 3rd Floor, Outer Ring Road, Chandra
            </Text>
          </View>
          <View style={styles?.mapImageSection}>
            <Image source={mapImage} style={styles?.mapImage} />
          </View>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey},
          ]}></View>
        
        <View style={styles?.feedBackSection}>
          <Text style={[styles?.topText, {color: colors?.accent?.grey}]}>
            FEEDBACK
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            Very good . courteous and efficient staff.
          </Text>
          <Text style={{color: colors?.accent?.grey, fontSize: 15}}>
            Jitu Raut . 2 years ago
          </Text>
          <Text style={[styles?.lastText, {color: colors?.primary?.blue}]}>
            ALL FEEDBACK
          </Text>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey},
          ]}></View>
        <View style={styles?.servicesSection}>
          <Text style={[styles?.topText, {color: colors?.accent?.grey}]}>
            SERVICES
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            Ophthalmology
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            Glaucoma
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            Cataract
          </Text>
          <Text style={[styles?.lastText, {color: colors?.primary?.blue}]}>
            ALL SERVICES
          </Text>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey, },
          ]}></View>
          <View style={styles?.specializationSection}>
          <Text style={[styles?.topText, {color: colors?.accent?.grey}]}>
          SPECIALIZATION
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
          Dermitologist
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
          Trichologist
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            Cosmetologist
          </Text>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey, },
          ]}></View>
          <View style={styles?.verifiedAccountSection}>
            <View style={styles?.verifiedIcon}>
              <EntypoIcon name='dot-single' size={30} color ={colors?.secondary?.green}/>
                <Text style={{color : colors?.accent?.grey}}>VERIFICATION DONE FOR</Text>
            </View>
            <Text style={{color : colors?.accent?.dark}}>- Medical License</Text>
          </View>
          <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey, },
          ]}></View>
            <Text style={{color : colors?.accent?.grey,marginTop : '5%'}}>
            ALSO PRACTICES AT
            </Text>
          <View style={styles?.drProfileInfoSection}>
          <View style={styles?.leftContent}>
            <View
              style={[
                styles?.profileCircle,
                {backgroundColor: colors?.accent?.shadowColor},
              ]}></View>
            <View style={styles?.drInfo}>
              <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
              Dr. Zan Chau
              </Text>
              <Text style={{color: colors?.accent?.grey, marginBottom: '1.5%'}}>
              Dermatologist 
              </Text>
              <Text style={{color: colors?.accent?.dark}}>$ 50</Text>
            </View>
          </View>
          <View>
            <View style={styles?.ratingStarSection}>
              <AntDesignIcons name='star' size={20} color={colors?.secondary?.yellow} style={{marginRight : 5}}/>
              <Text style={{color : colors?.accent?.grey}}>4.2</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey},
          ]}></View>
        <View style={styles?.drProfileInfoSection}>
          <View style={styles?.leftContent}>
            <View
              style={[
                styles?.profileCircle,
                {backgroundColor: colors?.accent?.shadowColor},
              ]}></View>
            <View style={styles?.drInfo}>
              <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
              Dr. Rina Dome
              </Text>
              <Text style={{color: colors?.accent?.grey, marginBottom: '2%'}}>
              Dermatologist
              </Text>
              <Text style={{color: colors?.accent?.dark}}>$ 30</Text>
            </View>
          </View>
          <View>
          <View style={styles?.ratingStarSection}>
              <AntDesignIcons name='star' size={20} color={colors?.secondary?.yellow} style={{marginRight : 5}}/>
              <Text style={{color : colors?.accent?.grey}}>4.2</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey,marginBottom : '20%'},
          ]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginHorizontal: '5%',
    borderRadius: 15,
    // marginBottom : '20%'
  },
  cardContentwrapper: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  cardTopSection: {
    marginBottom: '4%',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 15,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 17,
    marginLeft: '2%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginHorizontal: '-2%',
  },
  timingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: '3.5%',
  },
  leftText: {
    fontSize: 14,
  },
  bottomText: {
    fontSize: 14,
    marginTop: '1%',
  },
  rightText: {
    fontSize: 15,
    marginTop: '1%',
    fontWeight: 'bold',
  },
  mapSection: {
    paddingVertical: '5%',
  },
  addressIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '3%',
  },
  addressText: {
    fontSize: 15,
    marginLeft: '3%',
    marginBottom: '1%',
  },
  mapImageSection: {
    width: '100%',
    height: 110,
    paddingHorizontal: '3%',
    marginBottom: '2%',
  },
  mapImage: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  drProfileInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'space-between',
    paddingTop: '2%',
    paddingBottom: '4.5%',
    marginTop : '3%',

  },
  leftContent : {
    flexDirection : 'row'
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  drInfo: {
    marginLeft: '4%',
    flexBasis: '45%',
  },
  buttonSection: {
    marginTop : '10%'
  },
  drName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  servicesSection: {
    paddingVertical: '4%',
  },
  topText: {
    marginBottom: '2%',
  },
  lastText: {
    marginTop: '3%',
    fontWeight: 'bold',
    fontSize: 15,
  },
  feedBackSection: {
    paddingVertical: '4%',
  },
  specializationSection : {
    paddingVertical : '4%',
  },
  verifiedAccountSection : {
    paddingVertical : '6%',

  },
  verifiedIcon : {
    flexDirection : 'row',
    alignItems : 'center'
  },
  ratingStarSection : {
    flexDirection : 'row'
  },
});
