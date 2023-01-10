import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {setOrganizationId} from '../store/features/login/loginSice';

/// Image
import starIcon from '../../../assets/images/star.png';
import hospitalImage from '../../../assets/images/hospitalImage.png'


export default function DepartmentDemoList(props) {
  const {colors} = useSelector(state => state?.color);
  const {
    navigator,
    specializationList
  } = props;
    
  /// Hopsital Api response state

  const navigation = useNavigation();
  const dispatch = useDispatch();



  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH2 = width * 0.39; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT2 = height * 0.21;

  return (
    <>
      <View style={styles?.bottomSection}>
        <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
          Hospitals
        </Text>
        <Text style={[styles?.rightText, {color: colors?.primary?.blue}]}>
          See All
        </Text>
      </View>

      {/* Boxes to be shown on selectable icon */}

      <View style={styles?.profileBoxesSection}>
        <FlatList
          data={specializationList}
          keyExtractor={item => item?.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() =>
                  navigator?.navigate({
                    name: "Speciality",
                    params: {department_id: item?.id},
                    merge: true,
                  })
                }
                style={[
                  styles?.profileBox,
                  {
                    backgroundColor: colors?.accent?.white,
                    width: ITEM_LENGTH2,
                    height: HEIGHT2,
                    marginRight: item?.lastChild ? 18 : 0,
                  },
                ]}>
                <View style={[styles?.profileCircle]}>
                  <Image
                    source={hospitalImage}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 70 / 2,
                    }}
                  />
                </View>
                <Text
                  style={[styles?.profileName, {color: colors?.accent?.dark}]}>
                  {item?.name}
                </Text>
                {/* <Text style={[styles?.address, {color: colors?.accent?.grey}]}>
                  {item?.building}
                </Text> */}
                
                  {/* <View style={styles?.review}>
                    <Image
                      source={starIcon}
                      resizeMode="contain"
                      style={{width: 20, height: 20}}
                    />
                    <Text
                      style={{
                        marginLeft: 7,
                        fontSize: 14,
                        color: colors?.accent?.grey,
                      }}>
                      4.2
                    </Text>
                  </View> */}
                
              </Pressable>
            );
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomSection: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  leftText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  rightText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileBoxesSection: {},
  profileBox: {
    marginLeft: 18,
    borderRadius: 15,
    paddingHorizontal: '5%',
    marginTop: '27%',
  },
  profileCircle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: '-17%',
  },
  profileName: {
    marginTop: '-12%',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '3%',
  },
  address: {
    fontSize: 14,
    marginBottom: '10%',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10%',
  },
});
