import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilePic from '../../../assets/images/profile.jpeg';
import Button from '../../../common/Button';
import CalendarStrip from 'react-native-calendar-strip';

export default function TimeSlot({navigation}) {
  const {colors} = useSelector(state => state?.color);

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
        <View style={styles?.crossIconSection}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesignIcon
              name="arrowleft"
              size={30}
              color={colors?.accent?.white}
            />
            <Text style={[styles?.header, {color: colors?.accent?.white}]}>
              Select a time slot
            </Text>
          </View>

          <View>
            <Text style={{color: colors?.accent?.white}}>Country</Text>
          </View>
        </View>
      </View>
      <View style={{top: '-15%'}}>
        <View
          style={[
            styles?.timeSlotCardWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <View style={styles?.topSection}>
            <View style={[styles?.drImage, {marginRight: 20}]}>
              <Image
                source={ProfilePic}
                style={{width: '100%', height: '100%', borderRadius: 70 / 2}}
              />
            </View>
            <View style={styles?.textSection}>
              <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
                Dr. Jitendra Raut
              </Text>
              <Text style={{color: colors?.accent?.grey,fontSize : 14}}>
                B.Sc, MBBS, DDVL, MD- Dermitol...
              </Text>
            </View>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey},
            ]}></View>

          <View style={styles?.centeredSection}>
            <View style={{width : 300, height : 100,marginBottom : '10%'}}>
              <CalendarStrip
                scrollable
                style={{flex : 1,}}
                dateNameStyle={{display : 'none'}}
                showDate={true}
                calendarHeaderStyle={{marginTop : '10%',fontSize : 18,color : 'black'}}
                dateNumberStyle={{display : 'none'}}
                headerText={`Today, ${4} December`}

              />
            </View>

            <Text style={{color : colors?.accent?.grey,fontSize : 14}}>No Slots available for today</Text>
            <View style={styles?.buttonWrapper}>
            <Button
            text="Next day avaibility on Tue, 09"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={17}
            outlineColor={colors?.primary?.blue}
            fontSize={17}
            buttonWidth = {260}
          handlePress={() => navigation.navigate('Current Day Schedule')}
          />
            </View>
            <Text style={{color : colors?.accent?.grey,fontSize : 14}}>OR</Text>
            <View style={[styles?.iconCircle,{backgroundColor : colors?.primary?.blue}]}>
                <MaterialCommunityIcon name='greater-than' size={20} color ={colors?.accent?.white}/>
            </View>
          </View>
        </View>
        <View style={styles?.buttonsSection}>
          <Button
            text="Continue"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={14}
            outlineColor={colors?.primary?.blue}
            fontSize={18}
            handlePress={() => navigation.navigate('Current Day Schedule')}
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
  backDropSection: {
    height: '30%',
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    paddingHorizontal: '5%',
  },
  crossIconSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '7%',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  timeSlotCardWrapper: {
    borderRadius: 15,
    marginHorizontal: '5%',
    height: '70%',
  },
  topSection: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: '10%',
    alignItems: 'center',
  },
  drImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textSection: {
    flexBasis: '70%',
  },
  centeredSection: {
    alignItems: 'center',
  },
  buttonsSection: {
    marginHorizontal: '5%',
    marginTop: '20%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginHorizontal: '3%',
    marginTop: '5%',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : '5%',
    
  },
  buttonWrapper : {
    marginTop : '7%',
    marginBottom : '3%'
  },
});
