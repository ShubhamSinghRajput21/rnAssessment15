import {LOGIN} from './types';
const initialState = {
  userId: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        userId: action.payload,
      };
    default:
      return state;
  }
}
