import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React,{useState} from 'react';
import {useSelector} from 'react-redux';

import Button from '../../../common/Button';

/// Images
import progressBar from '../../../assets/images/Step1.png';
import ProfilePic from '../../../assets/images/profile.jpeg';
import  CalendarStrip  from 'react-native-calendar-strip';


export default function NextDaySchedule({navigation}) {
  const {colors} = useSelector(state => state);
  const [value,setValue] = useState()

  console.log(Date);
  const date = new Date();
  console.log(date);
  

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
    <View style={{flexBasis : '20%',marginTop : '-19%',marginBottom : '7%'}}>
          <Image source={progressBar} resizeMode='contain' style={{width :'100%',height : 300,zIndex : 2}}/>
        </View>
      <View>
        <View
          style={[
            styles?.timeSlotCardWrapper,
            {backgroundColor: colors?.accent?.white},
          ]}>
          <View style={styles?.topSection}>
            <View style={[styles?.drImage,{marginRight: 20,}]}>
              <Image
                source={ProfilePic}
                style={{width: '100%', height: '100%', borderRadius: 70 / 2}}
              />
            </View>
            <View style={styles?.textSection}>
              <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
                Dr. Jitendra Raut
              </Text>
              <Text style={{color: colors?.accent?.grey}}>
                B.Sc, MBBS, DDVL, MD- Dermitol... 
              </Text>
            </View>
          </View>
          <View style={[styles?.horizontalLine,{borderColor : colors?.accent?.lightGrey}]}></View>
          <View style={{width : 250, height : 85,marginTop : '5%',marginLeft : 'auto',marginRight : 'auto'}}>
              <CalendarStrip
                scrollable
                style={{flex : 1,}}
                // startingDate= "2022-12-2"
                dateNameStyle={{color : colors?.accent?.dark}}
                showDate={true}
                calendarHeaderStyle={{marginTop : '10%',fontSize : 20,color : 'black',}}
                dateNumberStyle={{color : colors?.accent?.dark,}}
                headerText={`Today, ${2} December`}
                onDateSelected={val=>setValue(val)}
                // onDateSelected={}
                // showMonth={false}
                // showDayName={false}
                // showDayNumber={false}
                // iconLeft= {require('../../../assets/images/backLeft.png')}

              />
            </View>
          <View style={[styles?.scheduleBox,{borderColor : colors?.accent?.lightGrey,backgroundColor : colors?.accent?.shadowColor      }]}>
            <View style={[styles?.badge,{backgroundColor : colors?.gradients?.lightSkyBlue?.second,borderColor : 'transparent'}]}>
                <Text style={{color : colors?.accent?.dark}}>Morning</Text>
            </View>
            <View style={styles?.upperLine}>
                <Text style={{color : colors?.accent?.grey,fontSize : 15}}>Doctor Fees</Text>
            </View>
            <View style={styles?.lowerLine}>
                <Text style={{color : colors?.accent?.dark,fontSize : 17}}>10.00 am - 1.00 pm</Text>
                <Text style={{color : colors?.accent?.dark,fontSize : 17,fontWeight : 'bold'}}>$600</Text>
            </View>
          </View>
          <View style={[styles?.scheduleBox,{borderColor : colors?.accent?.lightGrey,backgroundColor : colors?.accent?.shadowColor}]}>
            <View style={[styles?.badge,{backgroundColor : colors?.gradients?.lightSkyBlue?.second,borderColor : 'transparent'}]}>
                <Text style={{color : colors?.accent?.dark}}>Afternoon</Text>
            </View>
            <View style={styles?.upperLine}>
                <Text style={{color : colors?.accent?.grey,fontSize : 15}}>Doctor Fees</Text>
            </View>
            <View style={styles?.lowerLine}>
                <Text style={{color : colors?.accent?.dark,fontSize : 17}}>4.00 pm - 6.00 pm</Text>
                <Text style={{color : colors?.accent?.dark,fontSize : 17,fontWeight : 'bold'}}>$600</Text>
            </View>
          </View>
          <View style={[styles?.scheduleBox,{borderColor : colors?.accent?.lightGrey,backgroundColor : colors?.accent?.shadowColor}]}>
            <View style={[styles?.badge,{backgroundColor : colors?.gradients?.lightSkyBlue?.second,borderColor : 'transparent',width : '50%',}]}>
                <Text style={{color : colors?.accent?.dark}}>Evening & Night</Text>
            </View>
            <View style={styles?.upperLine}>
                <Text style={{color : colors?.accent?.grey,fontSize : 15}}>Doctor Fees</Text>
            </View>
            <View style={styles?.lowerLine}>
                <Text style={{color : colors?.accent?.dark,fontSize : 17}}>7.00 pm - 10.00 pm</Text>
                <Text style={{color : colors?.accent?.dark,fontSize : 17,fontWeight : 'bold'}}>$600</Text>
            </View>
          </View>
        </View>
        <View
          style={styles?.buttonsSection}>
          <Button
            text="Continue"
            buttonColor={colors?.primary?.blue}
            buttonTextColor={colors?.accent?.white}
            buttonVerticalPadding={17}
            outlineColor={colors?.primary?.blue}
            fontSize={17}
              handlePress={()=>navigation.navigate('Booking Review')}
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
    justifyContent : 'space-between'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  timeSlotCardWrapper: {
    borderRadius: 15,
    marginHorizontal: '5%',
    height : '80%',
  },
  topSection: {
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '10%',
    alignItems : 'center'
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
  textSection : {
    flexBasis : '70%'
  },
  scheduleBox : {
    borderWidth : 1,
    borderRadius : 15,
    paddingVertical : '5%',
    paddingHorizontal : '7%',
    marginHorizontal : '5%',
    position : 'relative',
    marginTop : '10%'
},
  badge : {
    borderWidth : 1,
    borderRadius : 15,
    width : '38%',
    alignItems : 'center',
    paddingVertical : '.5%',
    position : 'absolute',
    top : -10,
    left : 17

  },
  upperLine : {
    alignItems : 'flex-end'
  },
  lowerLine : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  buttonsSection : {
    marginHorizontal : '5%',
    marginTop : '8%'
  },
  horizontalLine : {
    borderBottomWidth : 1,
    marginHorizontal : '3%',
    marginTop : '5%'
  },
  iconCircle : {
    width : 50,
    height : 50,
    borderRadius : 50 / 2,
    justifyContent : 'center',
    alignItems : 'center',

  },
});
