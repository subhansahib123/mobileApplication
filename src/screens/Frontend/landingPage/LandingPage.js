import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BackDrop from '../../../common/BackDrop';
import {useSelector} from 'react-redux';

/// Pages
import HospitalDemoList from './HospitalDemoList';
import DoctorDemoList from './DoctorDemoList';
import DepartmentDemoList from './DepartmentDemoList';

// Images
import sliderImage from '../../../assets/images/sliderImage.png';
import hospitalIcon from "../../../assets/images/hospitalIcon.png"
import hospitalIconSelected from "../../../assets/images/hospitalIconSelected.png"
import doctorIcon from '../../../assets/images/doctorfillIcon.png'
import doctorIconSelected from '../../../assets/images/doctorfillIconWhite.png'
import departmentIcon from "../../../assets/images/departmentIcon.png"
import departmentIconSelected from "../../../assets/images/departmentIconWhite.png"

export default function LandingPage({navigation}) {
  const {colors} = useSelector(state => state);
  const [selectedTab, setSelectedTab] = useState('');
  const [active, setActive] = useState();

  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH1 = width * 0.85; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT1 = height * 0.18;

  const DATA = [{id: 0}, {id: 1}, {id: 2}];


  return (
    <ScrollView
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
                active == 1 ? colors?.primary?.violet  : colors?.accent?.white,
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
            <Image source={active == 1 ? hospitalIconSelected : hospitalIcon} resizeMode = 'contain' style={{flex : .55}}/>
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
                active == 2 ? colors?.primary?.violet  : colors?.accent?.white,
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
          <Image source={active == 2 ? doctorIconSelected : doctorIcon} resizeMode = 'contain' style={{flex : .55}}/>
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
                active == 3 ? colors?.primary?.violet  : colors?.accent?.white,
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
          <Image source={active == 3 ? departmentIconSelected : departmentIcon} resizeMode = 'contain' style={{flex : .55}}/>
        </Pressable>
      </View>

      {/* Text  */}
      <View style={styles?.textBoxSection}>
        <View style={styles?.textSection}>
          <Text style={[styles?.name, {color: colors?.accent?.dark}]}>
            Hospitals
          </Text>
          <Text style={[styles?.info, {color: colors?.accent?.grey}]}>
            Search {`\n`} Hospitals 
          </Text>
        </View>
        <View style={styles?.textSection}>
          <Text style={[styles?.name, {color: colors?.accent?.dark}]}>
            Department
          </Text>
          <Text style={[styles?.info, {color: colors?.accent?.grey}]}>
            Search Departments
          </Text>
        </View>
        <View style={styles?.textSection}>
          <Text style={[styles?.name, {color: colors?.accent?.dark}]}>
            Specialization
          </Text>
          <Text style={[styles?.info, {color: colors?.accent?.grey}]}>
          Search Specialists
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
                  source={sliderImage}
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
                  source={sliderImage}
                  style={{width: '100%', height: '100%', borderRadius: 10}}
                />
              </View>
            );
          }}
        />
      </View>
        }
    </ScrollView>
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    textAlign: 'center',
    fontSize: 14,
  },
  sliderSection: {
  },
  imageBox: {
    marginLeft: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});
