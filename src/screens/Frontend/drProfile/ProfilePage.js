import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import ProfileInfoBox from './ProfileInfoBox';
import CompleteDetailsCard from './CompleteDetailsCard';

export default function ProfilePage({navigation}) {
  const {colors} = useSelector(state => state);

  return (
    <ScrollView
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shaowColor},
      ]}>
      <View
        style={[
          styles?.backDropSection,
          {backgroundColor: colors?.primary?.blue},
        ]}>
        <AntDesignIcon
          name="arrowleft"
          size={30}
          color={colors?.accent?.white}
          style={{paddingTop: '8%'}}
        />
      </View>
      <View style={{top: '-9.3%'}}>
        <View>
          <ProfileInfoBox />
        </View>
        <View style={{paddingVertical : '5%',marginBottom : '12%'}}>
            <CompleteDetailsCard />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backDropSection: {
    paddingHorizontal: '5%',
    width: '100%',
    height: '16%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
