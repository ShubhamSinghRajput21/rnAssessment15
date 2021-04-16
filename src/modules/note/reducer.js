import {ADD_NOTE} from './types';
const initialState = {
  notes: [],
  noteStatus: null,
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: action.payload.data,
        noteStatus: action.payload.status,
      };
    default:
      return state;
  }
}
