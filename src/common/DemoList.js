import {Dimensions, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function DemoList(props) {
  const {colors} = useSelector(state => state);
  const {headingText, topText, bottomText, reviewStar,handlePress} = props;

  const navigation = useNavigation();
  const DATA = [{id: 0}, {id: 1}, {id: 2}];

  const {width, height} = Dimensions.get('screen');
  const ITEM_LENGTH2 = width * 0.39; // Item is a square. Therefore, its height and width are of the same length.
  const HEIGHT2 = height * 0.22;

  return (
    <>
      <View style={styles?.bottomSection}>
        <Text style={[styles?.leftText, {color: colors?.accent?.dark}]}>
          {headingText}
        </Text>
        <Text style={[styles?.rightText, {color: colors?.primary?.blue}]}>
          See All
        </Text>
      </View>

      {/* Boxes to be shown on selectable icon */}
      <View  style={styles?.profileBoxesSection}
      
      >
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Pressable onPress={handlePress}
                style={[
                  styles?.profileBox,
                  {
                    backgroundColor: colors?.accent?.white,
                    width: ITEM_LENGTH2,
                    height: HEIGHT2,
                  },
                ]}>
                <View
                  style={[
                    styles?.profileCircle,
                    {backgroundColor: colors?.accent?.dark},
                  ]}></View>
                <Text
                  style={[styles?.profileName, {color: colors?.accent?.dark}]}>
                  {topText}
                </Text>
                <Text style={[styles?.address,{color : colors?.accent?.grey}]}>{bottomText}</Text>
                {reviewStar && (
                  <View style={styles?.review}>
                    <AntDesign
                      name="star"
                      size={20}
                      color={colors?.secondary?.yellow}
                    />
                    <Text style={{marginLeft: 7, fontSize: 15,color : colors?.accent?.grey}}>4.2</Text>
                  </View>
                )}
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
    fontSize: 19,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileBoxesSection: {
    paddingTop: '10%',
    // flexBasis : '22%',
  },
  profileBox: {
    marginLeft: 20,
    borderRadius: 15,
    paddingHorizontal: '5%',
  },
  profileCircle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  profileName: {
    marginTop: '8%',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom : '3%'
  },
  address: {
    fontSize: 14,
    marginBottom: '10%',
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
    marginBottom: '5%',
  },
});
