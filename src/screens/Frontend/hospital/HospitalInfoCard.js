import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import mapImage from '../../../assets/images/map.webp';
import Button from '../../../common/Button';

/// Image
import locationIcon from '../../../assets/images/location.png';
import addressIcon from '../../../assets/images/location2.png';
import RatingStars from '../../../common/RatingStars';

// import {setParticularDepartmentId} from "../../../store/features/orgInfo/orgSlice"

export default function HospitalInfoCard({navigator, hospitalInfo,departmentInfo}) {

  const {colors} = useSelector(state => state?.color);
  
  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
      <View style={styles?.cardContentwrapper}>
        <View style={styles?.cardTopSection}>
          <Text style={[styles?.headingText, {color: colors?.accent?.dark}]}>
            {hospitalInfo?.hospital?.displayname}
          </Text>
          <View style={styles?.iconWrapper}>
            <Image
              source={locationIcon}
              resizeMode="contain"
              style={{width: 15, height: 15}}
            />
            <Text style={[styles?.locationText, {color: colors?.accent?.grey}]}>
              {`${hospitalInfo?.cityName},${hospitalInfo?.stateName},${hospitalInfo?.hospital?.country}`}
            </Text>
          </View>
          <View style={styles?.ratingStars}>
            <RatingStars size={18} sValue={4.5} readonly={true} />
          </View>
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
            <Image
              source={addressIcon}
              resizeMode="contain"
              style={{width: 15, height: 16}}
            />
            <Text style={[styles?.addressText, {color: colors?.accent?.grey}]}>
              Complete Address
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

        {hospitalInfo?.departmentSpecializations?.map((department, index) => {
          return (
            <View key={index}>
              <Text
                style={[styles?.departmentName, {color: colors?.accent?.dark}]}>
                {department?.name}
              </Text>
              <View style={styles?.drProfileInfoSection}>
                <View
                  style={[
                    styles?.profileCircle,
                    {backgroundColor: colors?.accent?.shadowColor},
                  ]}>
                  <Image
                    source={departmentInfo?.department?.image}
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 50 / 2,
                    }}
                  />
                </View>
                <View style={styles?.drInfo}>
                  <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
                    {departmentInfo?.department?.display_name}
                  </Text>
                  {/* <Text
              style={{
                color: colors?.accent?.grey,
                marginBottom: '1.5%',
                fontSize: 14,
              }}>
              B.Sc, MBBS, DDVL, MD
            </Text>
            <Text style={{color: colors?.accent?.dark, fontSize: 14}}>
              $ 50
            </Text> */}
                </View>
                <View style={styles?.buttonSection}>
                  <Button
                    text="Preview"
                    buttonColor={colors?.accent?.white}
                    buttonTextColor={colors?.primary?.blue}
                    buttonVerticalPadding={4}
                    outlineColor={colors?.accent?.lightGrey}
                    buttonWidth={90}
                    handlePress={() =>
                      navigator.navigate({
                        name: 'Speciality',
                        params: {departmentInfo: departmentInfo,doctors : departmentInfo?.doctors},
                      })
                    }
                  />
                </View>
              </View>
              <View
                style={[
                  styles?.horizontalLine,
                  {borderColor: colors?.accent?.lightGrey},
                ]}></View>
            </View>
          );
        })}

        {/* <Text style={[styles?.departmentName, {color: colors?.accent?.dark}]}>
          Dermatologist
        </Text> */}

        {/* <View style={styles?.drProfileInfoSection}>
          <View
            style={[
              styles?.profileCircle,
              {backgroundColor: colors?.accent?.shadowColor},
            ]}>
            <Image
              source={user2}
              resizeMode="contain"
              style={{width: '100%', height: '100%', borderRadius: 50 / 2}}
            />
          </View>
          <View style={styles?.drInfo}>
            <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
              Dr. Sandeep maheta
            </Text>
            <Text
              style={{
                color: colors?.accent?.grey,
                marginBottom: '1.5%',
                fontSize: 14,
              }}>
              Dermatologist
            </Text>
            <Text style={{color: colors?.accent?.dark, fontSize: 14}}>
              $ 70
            </Text>
          </View>
          <View style={styles?.buttonSection}>
            <Button
              text="Book"
              buttonColor={colors?.accent?.white}
              buttonTextColor={colors?.primary?.blue}
              buttonVerticalPadding={4}
              outlineColor={colors?.accent?.lightGrey}
              buttonWidth={90}
              handlePress={() => navigator.navigate('ProfilePage')}
            />
          </View>
        </View> */}
        {/* <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.lightGrey},
          ]}></View> */}
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
            {borderColor: colors?.accent?.lightGrey, marginBottom: '20%'},
          ]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginHorizontal: '5%',
    borderRadius: 15,
  },
  cardContentwrapper: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  cardTopSection: {
    marginBottom: '8%',
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    marginLeft: '2%',
  },
  ratingStars: {
    alignItems: 'flex-start',
    paddingTop: '3%',
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
    fontSize: 14,
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
    fontSize: 14,
    marginLeft: '3%',
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
  departmentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  drProfileInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '4.5%',
    marginTop: '3%',
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  drInfo: {
    marginLeft: '4%',
    flexBasis: '47%',
  },
  buttonSection: {
    marginLeft: '3%',
    // marginTop: '5%',
  },
  drName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  servicesSection: {
    paddingVertical: '4%',
  },
  topText: {
    marginBottom: '2%',
    fontSize: 14,
  },
  lastText: {
    marginTop: '3%',
    fontWeight: 'bold',
    fontSize: 16,
  },
  feedBackSection: {
    paddingVertical: '4%',
  },
});
