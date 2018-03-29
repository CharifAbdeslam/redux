import { combineReducers } from 'redux';
import Userslist  from './reducers_userList';
import Activeusers from './reducers_activeUsers';
const rootReducer = combineReducers({
  users : Userslist,
  activeusers:Activeusers
});
export default rootReducer;
