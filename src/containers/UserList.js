import React from "react";
import {connect} from 'react-redux';
import {selectUser} from "../actions/actions";
import {bindActionCreators} from "redux";
import {ListGroupItem} from 'reactstrap';
const UserList = ({users ,selectUser}) => {

    if (!users) {
      return <div>Loading</div>
    }
    return (<div>
            {
            users.map(user => {
               return (<ListGroupItem
                        onClick={()=>selectUser(user)}
                        key={user.id}>
                        {user.first}
                       </ListGroupItem>)})
           }
           </div>)
  }

const mapStateToProps = (state) => {
  return {users: state.users};
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectUser: selectUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
