import React, { Component } from 'react';

import Header from './Header'
import FooterNav from './FooterNav'
import Shelf from './Shelf'

class App extends Component {
  render () {
    return (
      <div className="full-app">
        <Header />
        <Shelf title="Currently Reading" />
        <Shelf title="Want to Read" />
        <Shelf title="Read" />
        <FooterNav />
      </div>
    );
  }
}

export default App;
