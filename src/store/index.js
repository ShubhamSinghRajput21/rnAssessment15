import {createStore, applyMiddleware, combineReducers} from 'redux';
import userReducer from '../modules/user';
import notesReducer from '../modules/note';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  userReducer: userReducer,
  notesReducer: notesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
