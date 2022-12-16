import React, {useState, useEffect} from 'react';
import {Image, LogBox} from 'react-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

/// Otp
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {getHash, startOtpListener, useOtpVerify} from 'react-native-otp-verify';

///Image
import estericImage from '../../../assets/images/code.png'

export default function OTP({navigation, route}) {
  const [Otp, setOtp] = useState();

  // const {confirm, phoneNumber} = route.params;
  const {colors} = useSelector(state => state);

  // const { hash, otp, message, timeoutError, stopListener, startListener } = useOtpVerify({numberOfDigits: 6});
  // async function confirmCode() {
  //   try {
  //     // await confirm.confirm(Otp);
  //     console.log('valid code');
  //   } catch (error) {
  //     console.log('Invalid code.');
  //     navigation.navigate('Bottom Tabs')
  //   }
  // }

  // useEffect(() => {
    
  //   getHash()
  //     .then(hash => {
  //       // console.log(hash);
  //     })
  //     .catch(console.log);
  //   startOtpListener(message => {
  //     // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
  //     const otp = /(\d{6})/g.exec(message)[1];
      
  //     console.log(otp)
  //     // console.log(isNaN(otp));
  //     console.log(typeof otp)
      
  //     setOtp(Number(otp));
  //   });
  //   return () => stopListener();
  // }, []);

  // console.log(typeof Otp)

  LogBox.ignoreLogs([
    'Warning:  Non-serializable values were found in the navigation state.',
  ]);

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={styles?.topSection}>
        <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
          Enter Code
        </Text>
        <View style={styles?.imagewrapper}>
          <Image source={estericImage} resizeMode='contain' style={styles?.image}/>
        </View>
        <Text style={[styles?.captionText, {color: colors?.accent?.dark}]}>
          We have sent you an SMS on +92 7020764458 with 6 digit verification
          code.
        </Text>
      </View>
      <View style={[styles?.box, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.inputWrapper}>
          <OTPInputView
            style={{width: '80%', height: 70}}
            pinCount={6}
            
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            // code={Otp} 
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            //  onCodeFilled = {(code => {
            //      console.log(`Code is ${code}, you are good to go!`)
            //  })
            // }
          />
        </View>
        <View style={{marginBottom: '10%', marginTop: '5%'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles?.buttonWrapper, {backgroundColor: colors?.primary?.blue}]}
            // onPress={() => confirmCode()}
            onPress={() => navigation.navigate('Bottom Tabs')}
          >
            <Text style={[styles?.buttonText, {color: colors?.accent?.white}]}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles?.resendSection}>
        <Text style={[styles?.questText,{color : colors?.accent?.dark}]}>Did not receive the code?</Text>
      </View>
      <View style={styles?.bottomSection}>
        <Text style={{fontSize : 17,color : colors?.primary?.blue,fontWeight : 'bold'}}>Re-send</Text>
        <Text style={{fontSize : 17,color : colors?.primary?.blue,fontWeight : 'bold'}}>Get a call now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection : {
    paddingHorizontal: '6%',
    marginTop : '20%',
  },
  box: {
    marginHorizontal: '6%',
    marginTop: '5%',
    borderRadius: 15,
    // elevation : 1
  },
  headerText: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
  },
  imagewrapper : {
    flexBasis : '10%',
    flex : 1,
    alignItems : 'center',
    marginTop : '2%'
  },
  image : {
    flex :1
  },
  captionText: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 25,
    marginBottom : '5%'
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%',
  },
  buttonWrapper: {
    marginHorizontal: '5%',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  resendSection : {
    marginTop : '6%',
    marginBottom : '5%'
  },
  bottomSection: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  questText : {
    textAlign : 'center',
    fontSize : 17
  },

});
