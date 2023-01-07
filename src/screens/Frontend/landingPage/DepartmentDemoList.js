import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import DemoList from '../../../common/DemoList'

/// Images
import departmentImage from '../../../assets/images/department.png';


export default function DepartmentDemoList({navigator}) {



  return (
    <>
      <DemoList
        headingText="Specialization"
        topText="Department name"
        bottomText="Location"
        reviewStar = {false}
        handlePress={()=>navigator.navigate('Speciality')}
        images = {departmentImage}
      />
    </>
  )
}

const styles = StyleSheet.create({})