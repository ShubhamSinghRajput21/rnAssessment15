import {LOGIN, SIGNUP, SET_USER, CLEAR_USER} from './types';
import {loginUrl, signupUrl} from '../../assets/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearUser = () => async (dispatch) => {
  try {
    await AsyncStorage.clear();
    dispatch({
      type: CLEAR_USER,
    });
  } catch (e) {
    // clear error
  }
};

export const getLocalUser = () => async (dispatch) => {
  try {
    const value = await AsyncStorage.getItem('userId');
    if (value !== null) {
      dispatch({
        type: SET_USER,
        payload: value,
      });
    }
  } catch (e) {
    // error reading value
  }
};

const storeData = async (value) => {
  try {
    console.log('storeData', value);
    await AsyncStorage.setItem('userId', value);
  } catch (e) {
    // saving error
  }
};

export const loginUser = (data, navigation) => async (dispatch) => {
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const newData = await response.json();
  console.log(newData);
  if (newData.status) {
    storeData(newData.id);
    dispatch({
      type: LOGIN,
      payload: newData,
    });
    navigation.navigate('My-Notes');
  } else {
    return false;
  }
};

export const signupUser = (data, navigation) => async (dispatch) => {
  const response = await fetch(signupUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const newData = await response.json();
  console.log(newData);
  if (newData.status) {
    storeData(newData.body.id);
    dispatch({
      type: SIGNUP,
      payload: newData.body.id,
    });
    navigation.navigate('My-Notes');
  }
};
