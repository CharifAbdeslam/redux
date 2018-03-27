import { combineReducers } from 'redux';
import { bookList } from './reducers_bookList';
const rootReducer = combineReducers({
  book : bookList
});
export default rootReducer;
