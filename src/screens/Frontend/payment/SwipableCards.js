import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function SwipableCards() {
    const {colors} = useSelector(state => state);

  const {width, height} = Dimensions.get('screen');
  const LENGTH = width * 0.8;
  const HEIGHT = height * 0.22;

  const DATA = [
    {
      id: '0',
      currentBalance: '$5,642',
      bgColor: colors?.gradients?.purple?.second,
    },
    {
        id: '1',
        currentBalance: '$9,662',
        bgColor: colors?.gradients?.purple?.first,
        lastChild : true,
    },
  ];

  return (
    
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // windowSize={21}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  styles?.paymentCard,
                  {
                    backgroundColor: item?.bgColor,
                    width: LENGTH,
                    height: HEIGHT,
                    marginRight : item?.lastChild ? 15 : 0
                  },
                ]}>
                <View style={styles?.upperlineWrapper}>
                  <View style={styles?.balanceWrapper}>
                    <Text style={{color: colors?.accent?.lightGrey}}>
                      Current Balance
                    </Text>
                    <Text
                      style={[styles?.balance, {color: colors?.accent?.white}]}>
                      {item?.currentBalance}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles?.upperRightText,
                      {color: colors?.accent?.white},
                    ]}>
                    VISA
                  </Text>
                </View>
                <View style={styles?.lowerLineWrapper}>
                  <Text style={{color: colors?.accent?.white, fontSize: 15}}>
                    0000 1234 5678 XXXX
                  </Text>
                  <Text style={{color: colors?.accent?.white, fontSize: 15}}>
                    10/21
                  </Text>
                </View>
              </View>
            );
          }}
        />
  )
}

const styles = StyleSheet.create({
    paymentCard: {
        borderRadius: 15,
        marginLeft : 15
      },
      upperlineWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '8%',
      },
      balanceWrapper: {
        flexDirection: 'column',
        marginTop: '10%',
        marginBottom: '20%',
      },
      balance: {
        fontSize: 30,
        fontWeight: '500',
      },
      upperRightText: {
        marginTop: '4%',
        fontSize: 22,
        fontWeight: 'bold',
      },
      lowerLineWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '8%',
        marginBottom: '7%',
      },
})