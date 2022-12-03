import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './Button';
import {useSelector} from 'react-redux';


export default function StartUpPage(props) {
  const {navigator, headingText, captionText, buttonText,imagePath} = props;

  const {colors} = useSelector(state => state);

  return (
    <>
      <View
        style={[styles?.container, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.imageBox}>
          <Image source={imagePath} style={{flex : .65}} resizeMode = 'contain'/>
        </View>
        <View style={styles?.infoBox}>
          <View>
            <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
              {headingText}
            </Text>
            <Text style={[styles?.captionText,{color : colors?.accent?.dark}]}>{captionText}</Text>
          </View>
          <View style={styles?.buttonSection}>
            <Button
              text={buttonText}
              buttonColor={colors?.accent?.white}
              buttonTextColor={colors?.primary?.violet}
              buttonVerticalPadding={13}
              outlineColor={colors?.accent?.lightGrey}
              handlePress={navigator}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    flexBasis: '40%',
    justifyContent : 'flex-end',
    alignItems : 'center',
  },
  infoBox: {
    flexBasis: '60%',
    justifyContent: 'space-between',
    paddingVertical: '15%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  buttonSection: {
    marginHorizontal: '25%',
  },
  captionText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
