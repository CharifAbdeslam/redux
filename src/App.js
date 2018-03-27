import React, { Component } from 'react';
import BookList from './BookList';
class App extends Component {
  render() {
    return (
      <div className="container text-center">
      <BookList/>
      </div>
    );
  }
}
export default App;
