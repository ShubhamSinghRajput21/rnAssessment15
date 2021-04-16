import {LOGIN, SIGNUP} from './types';
import {loginUrl, signupUrl} from '../../assets/apiConfig';

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
    navigation.navigate('My-Notes');
    dispatch({
      type: LOGIN,
      payload: newData,
    });
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
    navigation.navigate('My-Notes');
    dispatch({
      type: SIGNUP,
      payload: newData.body.id,
    });
  }
};
