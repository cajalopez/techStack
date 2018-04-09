import { combineReducers } from 'redux';
import { LibraryReducer } from './LibraryReducer';

export default combineReducer({
  libraries: LibraryReducer
});
