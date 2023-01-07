import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {setMemberToUpdate} from "../../../store/features/login/loginSice"

// Icons
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function MemberList({navigation, route}) {
  const {colors} = useSelector(state => state?.color);
  const {userToken,isNavigated} = useSelector(state => state?.login);

  const [memberList, setMemberList] = useState([]);
  const [triggered, setTriggered] = useState(false);

  const disptach = useDispatch()

  useEffect(() => {
    fetchMemberList();
  }, [triggered,isNavigated]);

  // Fetching Member List
  const fetchMemberList = async () => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    try {
      await fetch(
        'http://192.168.0.111:8000/api/patient/member/list',
        requestOptions,
      )
        .then(response => response.json())
        .then(result => handleResponse(result))
        .catch(error => console.log('error', error));
    } catch (error) {
      console.error(error);
    }
  };

  /// Storing Member List in state
  const handleResponse = result => {
    let members = result?.data?.members;
    setMemberList(members);

    setTriggered(true);
  };

  /// Deleting a member
  const deleteMember = async memberID => {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userToken}`);

    let raw = '';

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      `http://192.168.0.111:8000/api/patient/member/delete/${memberID}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => handleDeleteResponse(result))
      .catch(error => console.log('error', error));
  };

  const handleDeleteResponse = response => {
    let filteredData = memberList?.filter(member => {
      return member?.id != response?.data?.member?.id;
    });

    setMemberList(filteredData);
  };

  /// Updating a Member
  const updatMember = () => {
    navigation?.navigate({
      name: 'CreateMember',
    });
  };

  /// Navigating To Create User Page
  const handlePress = () => {
    navigation?.navigate({
      name: 'CreateMember',
    });
  };

  return (
    <View
      style={[
        styles?.container,
        {backgroundColor: colors?.accent?.shadowColor},
      ]}>
      <View
        style={[styles?.listCard, {backgroundColor: colors?.accent?.white}]}>
        <View style={styles?.cardTop}>
          <Text style={[styles?.headerText, {color: colors?.accent?.dark}]}>
            Member List
          </Text>
          <View style={styles?.btnWrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles?.btn, {backgroundColor: colors?.primary?.blue}]}
              onPress={
                ()=> {
                  handlePress()
                  disptach(setMemberToUpdate({}))
                }
                }>
              <Text style={[styles?.btnText, {color: colors?.accent?.white}]}>
                Add
                <AntDesignIcon
                  name="plus"
                  size={13}
                  style={{fontWeight: 'bold'}}
                  color={colors?.accent?.white}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles?.horizontalLine,
            {borderColor: colors?.accent?.grey},
          ]}></View>
        <View
          style={[
            styles?.patientList,
            {backgroundColor: colors?.accent?.shadowColor},
          ]}>
          <View style={styles?.listHeader}>
            <Text
              style={[styles?.listHeaderText, {color: colors?.accent?.dark}]}>
              Name
            </Text>
            <Text
              style={[styles?.listHeaderText, {color: colors?.accent?.dark}]}>
              Actions
            </Text>
          </View>
          <View
            style={[
              styles?.horizontalLine,
              {borderColor: colors?.accent?.lightGrey, marginHorizontal: 0},
            ]}></View>
          <View style={styles?.descText}>
            {memberList?.length == 0 ? (
              <>
                <Text style={[styles?.btmText, {color: colors?.accent?.dark}]}>
                  No Data available in table
                </Text>
                <View
                  style={[
                    styles?.horizontalLine,
                    {
                      borderColor: colors?.accent?.lightGrey,
                      marginHorizontal: 0,
                    },
                  ]}></View>
              </>
            ) : (
              <>
                {memberList?.length != 0 &&
                  memberList?.map((data, index) => {
                    return (
                      <View key={index}>
                        <View style={styles?.rowWrapper}>
                          <Text style={{color: colors?.accent?.dark}}>
                            {data?.name}
                          </Text>
                          <View style={styles?.buttonsWrapper}>
                            <TouchableOpacity
                              style={[
                                styles?.button,
                                {
                                  backgroundColor:
                                    colors?.gradients?.purple?.second,
                                },
                              ]}
                              activeOpacity={0.7}
                              onPress={() => {
                                updatMember()
                                disptach(setMemberToUpdate(data))
                                }}>
                              <FontAwesome5Icon
                                name="edit"
                                size={15}
                                color={colors?.accent?.white}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[
                                styles?.button,
                                {backgroundColor: colors?.secondary?.red},
                              ]}
                              activeOpacity={0.7}
                              onPress={() => deleteMember(data?.id)}>
                              <FontAwesomeIcon
                                name="trash"
                                size={15}
                                color={colors?.accent?.white}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View
                          style={[
                            styles?.horizontalLine,
                            {
                              borderColor: colors?.accent?.lightGrey,
                              marginHorizontal: 0,
                              marginTop: '7%',
                            },
                          ]}></View>
                      </View>
                    );
                  })}
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listCard: {
    marginHorizontal: '5%',
    marginTop: '10%',
    borderRadius: 15,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    flexBasis: '80%',
  },
  horizontalLine: {
    borderBottomWidth: 1,
    marginHorizontal: '3%',
    marginTop: '2%',
  },
  patientList: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderRadius: 10,
    marginBottom: '10%',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
  },
  listHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '3%',
  },
  descText: {
    marginHorizontal: '3%',
    marginBottom: '5%',
  },
  btmText: {
    textAlign: 'center',
    fontSize: 14,
  },
  btnWrapper: {
    flexBasis: '24%',
  },
  btn: {
    width: '100%',
    borderRadius: 14,
    paddingVertical: 4,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  button: {
    paddingVertical: 7,
    width: 50,
    alignItems: 'center',
    borderRadius: 7,
    marginRight: 5,
  },
});
