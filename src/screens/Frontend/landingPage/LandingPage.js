import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackDrop from '../../../common/BackDrop';
import {useSelector} from 'react-redux';

import FontisoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import bgImage from '../../../assets/images/doctor.webp';
import HospitalDemoList from './HospitalDemoList';
import DoctorDemoList from './DoctorDemoList';
import DepartmentDemoList from './DepartmentDemoList';

export default function LandingPage({navigation}) {
  const {colors} = useSelector(state => state);
  const [selectedTab, setSelectedTab] = useState('');
  const [active, setActive] = useState();

  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH1 = width * 0.85; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT1 = height * 0.18;

  const DATA = [{id: 0}, {id: 1}, {id: 2}];


  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View>
        <BackDrop navigator={navigation}/>
      </View>

      {/*  Selectable Icons */}
      <View style={styles?.iconBoxSection}>
        <Pressable
          onPress={() => {
            setSelectedTab('Hospital');
            setActive(1);
          }}
          style={[
            styles?.iconBox,
            {
              backgroundColor:
                active == 1 ? colors?.accent?.white : colors?.primary?.violet,
              shadowColor: active == 1 ? colors?.accent?.dark : 'transparent',
              shadowOffset: {
                width: active == 1 ? 0 : 0,
                height: active == 1 ? 12 : 0,
              },
              shadowOpacity: active == 1 ? 0.58 : 0,
              shadowRadius: active == 1 ? 16.0 : 0,

              elevation: active == 1 ? 24 : 0,
            },
          ]}>
          <MaterialIcon
            name="home-plus-outline"
            size={50}
            color={active == 1 ? colors?.accent?.dark : colors?.accent?.white}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedTab('Doctor');
            setActive(2);
          }}
          style={[
            styles?.iconBox,
            {
              backgroundColor:
                active == 2 ? colors?.accent?.white : colors?.primary?.violet,
              shadowColor: active == 2 ? colors?.accent?.dark : 'transparent',
              shadowOffset: {
                width: active == 2 ? 0 : 0,
                height: active == 2 ? 12 : 0,
              },
              shadowOpacity: active == 2 ? 0.58 : 0,
              shadowRadius: active == 2 ? 16.0 : 0,

              elevation: active == 2 ? 24 : 0,
            },
          ]}>
          <FontisoIcon
            name="doctor"
            size={50}
            color={active == 2 ? colors?.accent?.dark : colors?.accent?.white}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedTab('Department');
            setActive(3);
          }}
          style={[
            styles?.iconBox,
            {
              backgroundColor:
                active == 3 ? colors?.accent?.white : colors?.primary?.violet,
              shadowColor: active == 3 ? colors?.accent?.dark : 'transparent',
              shadowOffset: {
                width: active == 3 ? 0 : 0,
                height: active == 3 ? 12 : 0,
              },
              shadowOpacity: active == 3 ? 0.58 : 0,
              shadowRadius: active == 3 ? 16.0 : 0,

              elevation: active == 3 ? 24 : 0,
            },
          ]}>
          <FontAwesome5Icon
            name="building"
            size={50}
            color={active == 3 ? colors?.accent?.dark : colors?.accent?.white}
          />
        </Pressable>
      </View>

      {/* Text  */}
      <View style={styles?.textBoxSection}>
        <View style={styles?.textSection}>
          <Text style={[styles?.name, {color: colors?.accent?.dark}]}>
            Hospitals
          </Text>
          <Text style={[styles?.info, {color: colors?.accent?.grey}]}>
            Search Hospitals around you
          </Text>
        </View>
        <View style={styles?.textSection}>
          <Text style={[styles?.name, {color: colors?.accent?.dark}]}>
            Doctors
          </Text>
          <Text style={[styles?.info, {color: colors?.accent?.grey}]}>
            Search doctor around you
          </Text>
        </View>
        <View style={styles?.textSection}>
          <Text style={[styles?.name, {color: colors?.accent?.dark}]}>
            Departments
          </Text>
          <Text style={[styles?.info, {color: colors?.accent?.grey}]}>
            Departments around you
          </Text>
        </View>
      </View>

      {/* Image Slider */}
      <View style={styles?.sliderSection}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles?.imageBox,
                  {
                    width: ITEM_LENGTH1,
                    height: HEIGHT1,
                    borderColor: colors?.accent?.grey,
                  },
                ]}>
                <Image
                  source={bgImage}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                  resizeMode='cover'
                />
              </View>
            );
          }}
        />
      </View>

      {(selectedTab == 'Hospital' && <HospitalDemoList navigator= {navigation}/>) ||
        (selectedTab == 'Doctor' && <DoctorDemoList navigator= {navigation}/>) ||
        (selectedTab == 'Department' && <DepartmentDemoList navigator= {navigation}/>) ||
        selectedTab == '' && <View style={styles?.sliderSection}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles?.imageBox,
                  {
                    width: ITEM_LENGTH1,
                    height: HEIGHT1,
                    borderColor: colors?.accent?.grey,
                    marginTop : '10%'
                  },
                ]}>
                <Image
                  source={bgImage}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </View>
            );
          }}
        />
      </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconBoxSection: {
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
    top: -45,
  },
  iconBox: {
    width: 85,
    height: 85,
    borderRadius: 85 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    top : -35
    },
  textSection: {
    flexBasis: '30%',
  },
  name: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
    fontSize: 13,
  },
  sliderSection: {
  },
  imageBox: {
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});
