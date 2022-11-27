import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Button(props) {
  const {
    text,
    buttonColor,
    buttonTextColor,
    handlePress,
    buttonVerticalPadding,
    outlineColor,
    buttonWidth,
    fontSize,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles?.buttonWrapper,
        {
          backgroundColor: buttonColor,
          paddingVertical: buttonVerticalPadding,
          borderColor: outlineColor,
          width: buttonWidth,
          fontSize,
        },
      ]}
      onPress={handlePress}>
      <Text
        style={[
          styles?.buttonText,
          {color: buttonTextColor, fontSize: fontSize},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    // paddingVertical: 15,
    borderRadius: 30,
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
