import { combineReducers } from 'redux';
import People_list  from './reducers_bookList';
const rootReducer = combineReducers({
  people : People_list
});
export default rootReducer;
