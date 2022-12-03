import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DemoList from '../../../common/DemoList';

/// Images
import user1 from '../../../assets/images/asset-1.png';

export default function DoctorDemoList({navigator}) {

  return (
    <>
      <DemoList
        headingText="Doctors"
        topText="Doctor name"
        bottomText="Qualification"
        reviewStar={true}
        handlePress={() => navigator.navigate('ProfilePage')}
        images = {user1}
      />
    </>
  );
}

const styles = StyleSheet.create({});
