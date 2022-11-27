import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {Button, Checkbox} from 'react-native-paper';

export default function ProfileCompleteion(props) {
  const [checked, setChecked] = useState(false);
  const {colors} = useSelector(state => state);

  const {
    FirstInputField,
    SecondInputField,
    ThirdInputField,
    FourthInputField,
    FifthInputField,
    firstPlaceholderText,
    secondPlaceholderText,
    thirdPlaceholderText,
    fourthPlaceholderText,
    fifthPlaceholderText,
    buttonText,
  } = props;

  return (
    <View
      style={[styles.container, {backgroundColor: colors.accent.shadowColor}]}>
      <View
        style={[styles.fieldsWrapper, {backgroundColor: colors.accent.white}]}>
        <View
          style={[
            styles.iconCircle,
            {backgroundColor: colors.accent.shadowColor},
          ]}>
          <View style={styles.icon}>
            <FontAwesomeIcon
              name="camera"
              color={colors.accent.grey}
              size={30}
              // onPress={ () =>alert('hello') }
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.accent.shadowColor,
            marginHorizontal: '5%',
            borderRadius: 20,
            paddingHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <FirstInputField
            placeholder={firstPlaceholderText}
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.accent.shadowColor,
            marginHorizontal: '5%',
            borderRadius: 20,
            paddingHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <SecondInputField
            placeholder={secondPlaceholderText}
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.accent.shadowColor,
            marginHorizontal: '5%',
            borderRadius: 20,
            paddingHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <ThirdInputField
            placeholder={thirdPlaceholderText}
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.accent.shadowColor,
            marginHorizontal: '5%',
            borderRadius: 20,
            paddingHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <FourthInputField
            placeholder={fourthPlaceholderText}
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={{
            backgroundColor: colors.accent.shadowColor,
            marginHorizontal: '5%',
            borderRadius: 20,
            paddingHorizontal: '5%',
            marginBottom: '5%',
          }}>
          <FifthInputField
            placeholder={fifthPlaceholderText}
            placeholderTextColor={colors.accent.grey}
            style={{color: 'black'}}
          />
        </View>
        <View
          style={{
            marginHorizontal: '5%',
            flexDirection: 'row',
            maxWidth: '80%',
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color={colors.gradients.lightBlue.first}
          />
          <Text
            style={{
              color: 'black',
              // textAlign : 'center'
            }}>
            By creating an account you agree to our Terms of Service and Privacy
            Policy
          </Text>
        </View>
        <TouchableOpacity
          style={{marginHorizontal: '5%', marginVertical: '10%'}}
          activeOpacity={0.8}>
          <Button
            mode="contained"
            buttonColor={colors.gradients.lightBlue.second}
            textColor={colors.accent.white}>
            {buttonText}
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  fieldsWrapper: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 15,
    elevation: 4,
  },
  iconCircle: {
    width: 110,
    height: 110,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 110 / 2,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 110,
  },
  inputFieldWrapper: {},
});
