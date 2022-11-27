import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DemoList from '../../../common/DemoList'

export default function DepartmentDemoList({navigator}) {
  return (
    <>
      <DemoList
        headingText="Department nearby you"
        topText="Department name"
        bottomText="Location"
        reviewStar = {false}
        handlePress={()=>navigator.navigate('Speciality')}
      />
    </>
  )
}

const styles = StyleSheet.create({})