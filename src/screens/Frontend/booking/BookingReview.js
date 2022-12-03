import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RadioButton} from 'react-native-paper';

/// Images
import ProfilePic from '../../../assets/images/profile.jpeg';
import addButton from '../../../assets/images/add.png'
import progressBar from '../../../assets/images/Step3.png'

export default function BookingReview({navigation}) {
  const [status, setStatus] = useState('unchecked');
  const {colors} = useSelector(state => state);

  const handleSelection = () => {
    if (status == 'unchecked') {
      setStatus('checked');
    } else if (status == 'checked') {
      setStatus('unchecked');
    } else {
      setStatus(null);
    }
  };

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
        <View style={{flexBasis : '20%',marginTop : '-20%',marginBottom : '7%'}}>
          <Image source={progressBar} resizeMode='contain' style={{width :'100%',height : 300,zIndex : 2}}/>
        </View>
      <View
        style={[
          styles?.bookingReviewCard,
          {backgroundColor: colors?.accent?.white,zIndex : -1,},
        ]}>
        <View style={styles?.topSection}>
          <View style={[styles?.drImage]}>
            <Image
              source={ProfilePic}
              style={{width: '100%', height: '100%', borderRadius: 70 / 2}}
            />
          </View>
          <View>
            <Text style={[styles?.drName, {color: colors?.accent?.dark}]}>
              Dr. Jitendra Raut
            </Text>
            <Text style={{color: colors?.accent?.grey}}>
              B.Sc, MBBS, DDVL, MD- Dermitol...
            </Text>
          </View>
        </View>
        <View style={styles?.feeSection}>
          <View>
            <Text style={[styles?.topText, {color: colors?.accent?.grey}]}>
              DATE & TIME
            </Text>
            <Text style={[styles?.bottomText, {color: colors?.accent?.dark}]}>
              Tomorrow, 9 Dec
            </Text>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey},
            ]}></View>
          <View>
            <Text style={[styles?.topText, {color: colors?.accent?.grey}]}>
              Consultation Fees
            </Text>
            <Text style={[styles?.bottomText, {color: colors?.accent?.dark}]}>
              $600
            </Text>
          </View>
        </View>
        <View
          style={[
            styles?.textArea,
            {
              borderColor: colors?.accent?.lightGrey,
              backgroundColor: colors?.accent?.shadowColor,
            },
          ]}>
          <TextInput
            multiline={true}
            numberOfLines={6}
            placeholder="Additional Information"
            placeholderTextColor={colors?.accent?.grey}
            style={[styles?.textInput, {color: colors?.accent?.dark}]}
          />
        </View>
        <View
          style={[
            styles?.radioButtonSection,
            {marginBottom: status == 'unchecked' ? '15%' : 0},
          ]}>
          <RadioButton
            value="registerd"
            status={status}
            color={colors?.primary?.blue}
            onPress={() => handleSelection()}
          />
          <Text style={[styles?.questText, {color: colors?.accent?.dark}]}>
            Are you already registered with this hospital ?
          </Text>
        </View>
        {status == 'checked' && (
          <View style={styles?.addIconSection}>
            <Pressable
              onPress={() => navigation.navigate('Review Booking')}
              >
              <Image source={addButton} resizeMode = 'contain' style={{width : 100,height : 90,marginBottom : '-5%'}}/>
            </Pressable>
            <Text
              style={[styles?.uploadText, {color: colors?.accent?.lightDark}]}>
              Please upload your registration card
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bookingReviewCard: {
    marginHorizontal: '5%',
    borderRadius: 15,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  drImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 20,
  },
  drName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  feeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: '8%',
  },
  topText: {
    fontSize: 16,
    marginBottom: '2%',
    // fontWeight : 'bold  '
  },
  bottomText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  horizontalLine: {
    borderRightWidth: 1,
    height: '150%',
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: '5%',
    marginTop: '15%',
  },
  textInput: {
    textAlignVertical: 'top',
    paddingHorizontal: '5%',
  },
  radioButtonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '-10%',
    marginTop: '3%',
  },
  questText: {
    fontSize : 14
  },
  addIconSection: {
    alignItems: 'center',
    marginTop: '6%',
    marginBottom: '15%',
  },
  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation : 15
  },
  uploadText: {
    marginTop: '4%',
    fontSize : 14
  },
});
