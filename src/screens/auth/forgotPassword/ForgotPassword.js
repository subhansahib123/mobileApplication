import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

export default function ForgotPassword({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View style={[styles.boxWrapper, {backgroundColor: colors.accent.white}]}>
        <View>
          <Text style={[styles.headerText, {color: colors.accent.dark}]}>
            We will send a code to the phone number you registered to regain
            your password
          </Text>
          <View
            style={[
              styles.inputFieldWrapper,
              {backgroundColor: colors.accent.shadowColor},
            ]}>
            <TextInput
              placeholder="Phone Number"
              keyboardType="number-pad"
              placeholderTextColor={colors.accent.grey}
              maxLength={11}
              style={{color: 'black'}}
            />
          </View>
          <Text style={styles.captiontext}>Code sent to +1*****123459</Text>
          <View style={{paddingVertical: '7%'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.buttonWrapper,
                {backgroundColor: colors.gradients.lightBlue.second},
              ]}
              onPress={()=>navigation.navigate('BottomTabs')}
              >
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWrapper: {
    marginHorizontal: '4%',
    marginTop: '5%',
    borderRadius: 15,
  },
  headerText: {
    textAlign: 'center',
    margin: '10%',
    // color : 'black',
    fontSize: 16,
  },
  inputFieldWrapper: {
    marginHorizontal: '5%',
    borderRadius: 30,
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  captiontext: {
    marginHorizontal: '5%',
    textAlign: 'center',
    fontSize: 17,
  },
  buttonWrapper: {
    marginHorizontal: '5%',
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
