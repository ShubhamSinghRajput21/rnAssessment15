import {ADD_NOTE, GET_NOTE} from './types';
const initialState = {
  notes: [],
  noteStatus: null,
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: action.payload.data,
      };
    case GET_NOTE:
      return {
        ...state,
        notes: action.payload.response,
      };
    default:
      return state;
  }
}
