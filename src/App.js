import React, { Component } from 'react';

import Header from './Header'
import FooterNav from './FooterNav'

import BookItem from './BookItem'

class App extends Component {
  render () {
    return (
      <div className="full-app">
        <Header />
        <BookItem />
        <FooterNav />
      </div>
    );
  }
}

export default App;
