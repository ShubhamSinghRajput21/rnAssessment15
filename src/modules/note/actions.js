import {ADD_NOTE} from './types';
import {addNoteUrl} from '../../assets/apiConfig';

export const addNote = (data, id, callback) => async (dispatch) => {
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
    // dispatch({
    //   type: ADD_NOTE,
    //   payload: newData,
    // });
  } catch (error) {
    console.log(error);
  }
};
