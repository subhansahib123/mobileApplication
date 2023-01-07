import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

/// Images
import ProfilePic from '../../../assets/images/profile.jpeg';
import HopitalPic from '../../../assets/images/optic2.jpg';
import starIcon from '../../../assets/images/star.png'

export default function ProfileInfoBox() {
  const {colors} = useSelector(state => state?.color);

  return (
    <View
      style={[styles?.cardWrapper, {backgroundColor: colors?.accent?.white}]}>
      <View style={styles?.ratingSection}>
        <Text
          style={[styles?.subscriptionText, {color: colors?.secondary?.green}]}>
          Prime
        </Text>

        <View style={styles?.ratingStar}>
          <Image source={starIcon} resizeMode = 'contain' style={{width : 20,height : 20,marginRight : 5}}/>
          <Text style={{color: colors?.accent?.grey,fontSize : 14}}>4.2</Text>
        </View>
      </View>
      <View style={styles?.infoSection}>
        <View
          style={[
            styles?.profileImage,
            {
              backgroundColor: colors?.accent?.dark,
              borderColor: colors?.accent?.white,
            },
          ]}>
          <Image
            source={ProfilePic}
            style={{width: '100%', height: '100%', borderRadius: 90 / 2}}
          />
        </View>
        <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
          Dr. Jitendra Raut
        </Text>
        <Text style={[styles?.drInfo, {color: colors?.accent?.grey}]}>
          B.Sc, MBBS, DDVL, MD- Ophthalmologist
        </Text>
        <View style={styles?.experienceTextSection}>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            16{' '}
            <Text style={{color: colors?.accent?.grey, fontSize: 14}}>
              yrs. Experience
            </Text>
          </Text>
          <Text style={{color: colors?.accent?.dark, fontSize: 15}}>
            89%{' '}
            <Text style={{color: colors?.accent?.grey, fontSize: 14}}>
              (4384 votes)
            </Text>
          </Text>
        </View>
        <View style={styles?.imagesSection}>
          <View style={styles?.imageBox}>
            <Image source={HopitalPic} style={styles?.hospialImage} />
          </View>
          <View style={styles?.imageBox}>
            <Image source={HopitalPic} style={styles?.hospialImage} />
          </View>
          <View style={styles?.imageBox}>
            <Image source={HopitalPic} style={styles?.hospialImage} />
          </View>
          <View style={styles?.imageBox}>
            <Image source={HopitalPic} style={styles?.hospialImage} />
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    marginHorizontal: '5%',
    borderRadius: 15,
    // elevation : 34
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
    marginTop: '4%',
  },
  subscriptionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  ratingStar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoSection: {
    top: '-29%',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  drName: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  drInfo: {
    textAlign: 'center',
    fontSize : 14
  },
  experienceTextSection: {
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    marginBottom: '6%',
  },
  imagesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginBottom: '-15%',
  },
  imageBox: {
    width: 58,
    height: 58,
    borderRadius: 12,
  },
  hospialImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    
  },
});
