import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default function ChangePassword({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <View style={[styles.cotainer, {backgroundColor: colors.accent.lightgrey}]}>
      <View style={[styles.boxWrapper, {backgroundColor: colors.accent.white}]}>
        <View style={styles.fieldWrapper}>
          <View
            style={[
              styles.inputFieldWrapper,
              {backgroundColor: colors.accent.shadowColor},
            ]}>
            <TextInput
              placeholder="Old Password"
              style={{
                marginVertical: 2,
                color : 'black'
              }}
              placeholderTextColor={colors?.accent?.grey}
              />
            <FontAwesomeIcon name="eye" size={20} color={colors?.accent?.grey}/>
          </View>
          <View
            style={[
              styles.inputFieldWrapper,
              {backgroundColor: colors.accent.shadowColor},
            ]}>
            <TextInput
              placeholder=" Password"
              style={{
                marginVertical: 2,
                color : 'black'
              }}
              placeholderTextColor={colors?.accent?.grey}
              />
            <FontAwesomeIcon name="eye" size={20} color={colors?.accent?.grey}/>
          </View>
          <View
            style={[
              styles.inputFieldWrapper,
              {backgroundColor: colors.accent.shadowColor},
            ]}>
            <TextInput
              placeholder="Confirm Password"
              style={{
                marginVertical: 2,
                color : 'black'
              }}
              placeholderTextColor={colors?.accent?.grey}
              />
            <FontAwesomeIcon name="eye" size={20} color={colors?.accent?.grey}/>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=> navigation.navigate('Forget Password')}
              style={[
                styles.buttonWrapper,
                {backgroundColor: colors.gradients.lightBlue.second},
              ]}>
              <Text style={styles.buttonText}>Save Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
  },
  boxWrapper: {
    marginHorizontal: '4%',
    marginTop: '5%',
    borderRadius: 15,
  },
  fieldWrapper: {
    marginVertical: 30,
  },
  inputFieldWrapper: {
    marginHorizontal: '5%',
    borderRadius: 30,
    paddingHorizontal: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
