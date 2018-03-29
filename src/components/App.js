import React from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';
const App=()=>{
    return (
      <div className="container text-center">
      <UserList/>
      <UserDetail/>
      </div>
    );
}
export default App;
