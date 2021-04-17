import {ADD_NOTE, GET_NOTE} from './types';
import {addNoteUrl, getNotesUrl} from '../../assets/apiConfig';

export const addNote = (data, id, navigation) => async (dispatch) => {
  try {
    const response = await fetch(addNoteUrl + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const newData = await response.json();
    console.log(newData);
    if (newData.status) {
      dispatch({
        type: ADD_NOTE,
        payload: newData,
      });
      navigation.navigate('My-notes');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getNotes = (id, navigation) => async (dispatch) => {
  const response = await fetch(getNotesUrl + id, {
    method: 'GET',
  });
  const newData = await response.json();
  if (newData.status) {
    dispatch({
      type: GET_NOTE,
      payload: newData,
    });
  } else {
    console.log(newData.message);
  }
};
