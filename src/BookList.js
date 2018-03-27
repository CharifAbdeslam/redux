import React , { Component } from "react";
import { connect } from 'react-redux';
class BookList extends Component{
  render(){
    console.log(this.props.book)
    return(<h1>Hello</h1>)
  }
}
function mapStateToProps(state){
  return{
     book: state.bookList
  };
}
export default connect(mapStateToProps)(BookList);
