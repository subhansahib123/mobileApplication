import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

/// Cards
import ProfileCard from './ProfileCard';
import SettingsCard from './SettingsCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile({navigation}) {
  const {colors} = useSelector(state => state?.color);

  return (
    <ScrollView
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View style={styles?.profileSection}>
        <ProfileCard navigator={navigation}/>
      </View>
      <View style={styles?.routesSection}>
        <SettingsCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection: {
    marginBottom : '3%'
  },
  routesSection: {
    marginBottom :'5%'
  },
});
