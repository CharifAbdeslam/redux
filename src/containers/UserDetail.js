import React from 'react';
import { connect } from 'react-redux';

const  UserDetails =({activeusers})=>{
    if(!activeusers){
      return(<div>click some where</div>)
    }
    return(<h1>{activeusers.description}</h1>)
}
const mapStateToProps=(state)=>{
  return{
    activeusers:state.activeusers
  };
}
export default connect(mapStateToProps)(UserDetails)
