import { combineReducers } from 'redux';
import listsReducer from './listsReducer';

export default combineReducers({
    board: listsReducer
});