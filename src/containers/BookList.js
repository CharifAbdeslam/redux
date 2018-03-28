import React , { Component } from "react";
import { connect } from 'react-redux';
class BookList extends Component{
getuser(){
  if(!this.props.books){
    return <div>Loading</div>
  }
  console.log(this.props.books)
  return this.props.books.map(bk =>{
    return( <li key={bk.id}>{bk.first}</li>)
  })
}

  render(){

return(<div>{this.getuser()}</div>)

  }
}
function mapStateToProps(state){
  return{
     books: state.people
  };
}
export default connect(mapStateToProps)(BookList);
