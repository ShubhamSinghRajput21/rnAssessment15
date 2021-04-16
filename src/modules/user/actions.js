import {LOGIN} from './types';
import {loginUrl, signupUrl} from '../../assets/apiConfig';

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    console.log('login Successfull');
    console.log(newData);
    dispatch({
      type: LOGIN,
      payload: newData.body.id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signupUser = (data) => async (dispatch) => {
  try {
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
    dispatch({
      type: LOGIN,
      payload: newData.body.id,
    });
  } catch (error) {
    console.log(error);
  }
};
